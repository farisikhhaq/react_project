import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from './auth/firebase-config'
import "firebase/compat/auth"

const RegisterForm = () => {
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")

    const register = async () => {
        try {
          const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
          console.log(user)
        } catch (error) {
          console.log(error.message)
        }
      }

    return (
        <div className="container">
            <div className="col-md-5 mx-auto border p-4 border-success">
                <h1 className="text-success text-center font-weight-bolder mb-5">
                    Register
                </h1>
                <div className="form-group my-2">
                    <input placeholder='Email...' onChange={(event) => {
                        setRegisterEmail(event.target.value)
                    }} />
                </div>
                <div className="form-group my-2">
                    <input placeholder='Password...' onChange={(event) => {
                        setRegisterPassword(event.target.value)
                    }} />
                </div>
                <div className="form-group mt-5 mb-1">
                    <button onClick={register}>Create User</button>
                </div>
            </div>
        </div>
    );
};
export default RegisterForm;