import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "popper.js/dist/popper.min.js";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './auth/firebase-config'
import "firebase/compat/auth"
import "./Login.css";
import undraw_file_sync_ot38 from "./../image/undraw_file_sync_ot38.svg";
import { BsFacebook, BsTwitter, BsGoogle } from "react-icons/bs";

const LoginForm = () => {
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 order-md-2">
                        <img src={undraw_file_sync_ot38} alt="undraw_file_sync_ot38" className="profile" />
                    </div>
                    <div class="col-md-6 contents">
                        <div class="row justify-content-center">
                            <div class="col-md-8">
                                <div class="mb-4">
                                    <h3><b>Log In</b></h3> <h3> or <b>Sign In</b></h3>
                                    <p class="mb-4">Information System Tourism Indonesia & UMKM.</p>
                                </div>

                                    <div class="form-group first">
                                        <input type="text" class="form-control" placeholder="Email" onChange={(event) => {
                                            setLoginEmail(event.target.value)
                                        }} />
                                    </div>
                                    <div class="form-group last mb-4">
                                        <input type="password" class="form-control" placeholder="Password" onChange={(event) => {
                                            setLoginPassword(event.target.value)
                                        }} />
                                    </div>

                                    <button class="btn text-white btn-block btn-success btn-sm md-2" onClick={login}>Login User</button>
                                    <span class="d-block text-left my-4 text-muted"> or Log in with</span>

                                    <div class="social-login">
                                        <a href="#" class="facebook">
                                            <span class="icon-facebook mr-3"><BsFacebook /></span>
                                        </a>
                                        <a href="#" class="twitter">
                                            <span class="icon-twitter mr-3"><BsTwitter /></span>
                                        </a>
                                        <a href="#" class="google">
                                            <span class="icon-google mr-3"><BsGoogle /></span>
                                        </a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LoginForm;
