import { FirebaseApp, initializeApp } from "firebase/app"
import { Firestore, getFirestore } from "firebase/firestore"
import { Functions, getFunctions } from "firebase/functions"
import { getAuth } from "firebase/auth"

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
    const auth = getAuth(userApp)
    const userFirestore = getFirestore(userApp)
    const userFunctions = getFunctions(userApp)

    return {
        userApp,
        userFirestore,
        userFunctions
    }
}

const { userApp, userFirestore, userFunctions } = initializeUserServices()

export {
    userApp,
    userFirestore,
    userFunctions
}