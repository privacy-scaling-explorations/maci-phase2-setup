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
    Timestamp,
    where
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
        appId: process.env.REACT_APP_FIREBASE_APP_ID 
    })

    // Init services.
    const userFirestore = getFirestore(userApp)
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
`${"ceremonies"}/${ceremonyId}/${"circuits"}`


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