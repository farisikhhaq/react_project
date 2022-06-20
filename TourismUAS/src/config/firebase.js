import { initializeApp } from "firebase/app";
import firebaseConfig from './config'

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig)
}
export default initializeAuthentication;
