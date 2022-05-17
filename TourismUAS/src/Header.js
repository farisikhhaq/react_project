import React from 'react';
import routes from './routes';
import {Link} from 'react-router-dom';
import styles from './styles/styles.scss';


const Header = () => (
  <ul className={styles.nav}>
    {routes.map((route,i) => (
      <li key={i}>
        <Link to={route.path}>{route.name}</Link>
      </li>
    ))}
  </ul>
);

export default Header;