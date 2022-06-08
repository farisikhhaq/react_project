import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBo7iOJIsQcDUiCsNToHUQXJUnVB7rAumA",
    authDomain: "bigproject-react2.firebaseapp.com",
    projectId: "bigproject-react2",
    storageBucket: "bigproject-react2.appspot.com",
    messagingSenderId: "11716325145",
    appId: "1:11716325145:web:fb6e95eb3eab1699f9df88",
    measurementId: "G-841WZQ7S4R"
};

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig)
}

export default initializeAuthentication;