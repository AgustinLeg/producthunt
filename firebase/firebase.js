import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import firebaseConfig from './config';
import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {
    app,
    db,
    auth
}