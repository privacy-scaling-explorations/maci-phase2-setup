import { FirebaseApp, initializeApp } from "firebase/app"
import { Functions, getFunctions } from "firebase/functions"
import {
    collection as collectionRef,
    doc,
    DocumentData,
    DocumentSnapshot,
    Firestore,
    getFirestore,
    getDoc,
    getDocs,
    query,
    QueryConstraint,
    QueryDocumentSnapshot,
    QuerySnapshot,
    where,
    initializeFirestore
} from "firebase/firestore"

/**
 * Initialize and return the Firebase app and services.
 * @returns <App, Firestore, Functions> - the instance of the initialized Firebase app and services.
 */
export const initializeUserServices = (): {
    userApp: FirebaseApp
    userFirestore: Firestore
    userFunctions: Functions
} => {
    // Init app.
    const userApp = initializeApp({
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID,
        
    })

    // Init services.
    const userFirestore = initializeFirestore(userApp, {
        experimentalForceLongPolling: true,

    })
    const userFunctions = getFunctions(userApp)

    return {
        userApp,
        userFirestore,
        userFunctions
    }
}

const { userApp, userFirestore, userFunctions } = initializeUserServices()

/**
 * Get a specific document from database.
 * @param firestoreDatabase <Firestore> - the Firestore service instance associated to the current Firebase application.
 * @param collection <string> - the name of the collection.
 * @param documentId <string> - the unique identifier of the document in the collection.
 * @returns <Promise<DocumentSnapshot<DocumentData>>> - return the document from Firestore.
 */
export const getDocumentById = async (
    firestoreDatabase: Firestore,
    collection: string,
    documentId: string
): Promise<DocumentSnapshot<DocumentData>> => {
    const docRef = doc(firestoreDatabase, collection, documentId)

    return getDoc(docRef)
}

/**
 * Fetch for all documents in a collection.
 * @param firestoreDatabase <Firestore> - the Firestore service instance associated to the current Firebase application.
 * @param collection <string> - the name of the collection.
 * @returns <Promise<Array<QueryDocumentSnapshot<DocumentData>>>> - return all documents (if any).
 */
export const getAllCollectionDocs = async (
    firestoreDatabase: Firestore,
    collection: string
): Promise<Array<QueryDocumentSnapshot<DocumentData>>> =>
    (await getDocs(collectionRef(firestoreDatabase, collection))).docs

/**
 * Helper for obtaining uid and data for query document snapshots.
 * @param queryDocSnap <Array<QueryDocumentSnapshot>> - the array of query document snapshot to be converted.
 * @returns Array<FirebaseDocumentInfo>
 */
export const fromQueryToFirebaseDocumentInfo = (
    queryDocSnap: Array<QueryDocumentSnapshot>
): Array<any> =>
    queryDocSnap.map((document: QueryDocumentSnapshot<DocumentData>) => ({
        id: document.id,
        ref: document.ref,
        data: document.data()
    }))

/**
 * Get circuits collection path for database reference.
 * @notice all circuits related documents are store under `ceremonies/<ceremonyId>/circuits` collection path.
 * nb. This is a rule that must be satisfied. This is NOT an optional convention.
 * @param ceremonyId <string> - the unique identifier of the ceremony.
 * @returns <string> - the participants collection path.
 */
export const getCircuitsCollectionPath = (ceremonyId: string): string =>
`ceremonies/${ceremonyId}/circuits`

/**
 * Get contributions collection path for database reference.
 * @notice all contributions related documents are store under `ceremonies/<ceremonyId>/circuits/<circuitId>/contributions` collection path.
 * nb. This is a rule that must be satisfied. This is NOT an optional convention.
 * @param ceremonyId <string> - the unique identifier of the ceremony.
 * @param circuitId <string> - the unique identifier of the circuit.
 * @returns <string> - the contributions collection path.
 */
export const getContributionsCollectionPath = (ceremonyId: string, circuitId: string): string =>
    `${getCircuitsCollectionPath(ceremonyId)}/${circuitId}/contributions`

/**
 * Get participants collection path for database reference.
 * @notice all participants related documents are store under `ceremonies/<ceremonyId>/participants` collection path.
 * nb. This is a rule that must be satisfied. This is NOT an optional convention.
 * @param ceremonyId <string> - the unique identifier of the ceremony.
 * @returns <string> - the participants collection path.
 */
export const getParticipantsCollectionPath = (ceremonyId: string): string =>
`ceremonies/${ceremonyId}/participants`


/**
 * Helper for query a collection based on certain constraints.
 * @param firestoreDatabase <Firestore> - the Firestore service instance associated to the current Firebase application.
 * @param collection <string> - the name of the collection.
 * @param queryConstraints <Array<QueryConstraint>> - a sequence of where conditions.
 * @returns <Promise<QuerySnapshot<DocumentData>>> - return the matching documents (if any).
 */
export const queryCollection = async (
    firestoreDatabase: Firestore,
    collection: string,
    queryConstraints: Array<QueryConstraint>
): Promise<QuerySnapshot<DocumentData>> => {
    // Make a query.
    const q = query(collectionRef(firestoreDatabase, collection), ...queryConstraints)

    // Get docs.
    const snap = await getDocs(q)

    return snap
}

/**
 * Query for a specific ceremony' circuit contribution from a given contributor (if any).
 * @notice if the caller is a coordinator, there could be more than one contribution (= the one from finalization applies to this criteria).
 * @param firestoreDatabase <Firestore> - the Firestore service instance associated to the current Firebase application.
 * @param ceremonyId <string> - the unique identifier of the ceremony.
 * @param circuitId <string> - the unique identifier of the circuit.
 * @param participantId <string> - the unique identifier of the participant.
 * @returns <Promise<Array<FirebaseDocumentInfo>>> - the document info about the circuit contributions from contributor.
 */
export const getCircuitContributionsFromContributor = async (
    firestoreDatabase: Firestore,
    ceremonyId: string,
    circuitId: string,
    participantId: string
): Promise<Array<any>> => {
    const participantContributionsQuerySnap = await queryCollection(
        firestoreDatabase,
        getContributionsCollectionPath(ceremonyId, circuitId),
        [where("participantId", "==", participantId)]
    )

    return fromQueryToFirebaseDocumentInfo(participantContributionsQuerySnap.docs)
}

/**
 * Query for ceremony circuits.
 * @notice the order by sequence position is fundamental to maintain parallelism among contributions for different circuits.
 * @param firestoreDatabase <Firestore> - the Firestore service instance associated to the current Firebase application.
 * @param ceremonyId <string> - the ceremony unique identifier.
 * @returns Promise<Array<FirebaseDocumentInfo>> - the ceremony' circuits documents ordered by sequence position.
 */
export const getCeremonyCircuits = async (
    firestoreDatabase: Firestore,
    ceremonyId: string
): Promise<Array<any>> =>
    fromQueryToFirebaseDocumentInfo(
        await getAllCollectionDocs(firestoreDatabase, getCircuitsCollectionPath(ceremonyId))
    ).sort((a: any, b: any) => a.data.sequencePosition - b.data.sequencePosition)


export {
    userApp,
    userFirestore,
    userFunctions
}