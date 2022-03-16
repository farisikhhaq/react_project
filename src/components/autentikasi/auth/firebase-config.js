import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB4MlUsxW3pmLjr9F1Sy-ZHdYsPtUasc8k",
  authDomain: "reactjs-bigproject.firebaseapp.com",
  projectId: "reactjs-bigproject",
  storageBucket: "reactjs-bigproject.appspot.com",
  messagingSenderId: "1065040951568",
  appId: "1:1065040951568:web:61ad1ecc3673b3f013cd95",
  measurementId: "G-BSQJLKVF33"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)