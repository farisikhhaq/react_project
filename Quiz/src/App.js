import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/autentikasi/auth/firebase-config'
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterForm from "./components/autentikasi/Register";
import LoginForm from "./components/autentikasi/Login";
import "firebase/compat/auth";

function App() {

  const [user, setUser] = useState("")

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  const logout = async () => {
    await signOut(auth)
  }

  return (
    <div className="container">
      <LoginForm />
      <RegisterForm />
      <br>
      </br>      <br>
      </br>      <br>
      </br>      <br>
      </br>
      <h3>Login Check Firebase</h3>
      <h4>User Berhasil Masuk Dengan Akun : {user && user.email}</h4>
      <button onClick={logout}>Sign Out</button>
    </div>
  );
}

export default App;
