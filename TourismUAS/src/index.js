import styles from './styles/styles.scss';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import routes from './routes.js';
import Header from './Header';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import {Provider} from 'react-redux';
import store from './redux/store';
// import App from './App';

firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);

export function App(){
  const [isLoggedIn, setLoggedIn] = useState(false);

  return(
    <AuthContext.Provider value={{isLoggedIn, setLoggedIn}}>
            Is logged in? {JSON.stringify(isLoggedIn)}
      <div className={styles.App}>
        <Router>
          <Header/>
         
          <Switch>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);