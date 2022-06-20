import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import firebaseConfig from './config'

const firebaseApp = initializeApp(firebaseConfig);
const dba = getFirestore(firebaseApp)

export default dba;
