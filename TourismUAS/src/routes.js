import React from 'react';
import Login from './Login';
import Join from './Join.js';


const routes = [
  // eslint-disable-next-line react/display-name
  { name : 'Join', path: '/', exact: true, main: () => <Join /> },
  // eslint-disable-next-line react/display-name
  { name : 'Login', path: '/login', exact: true, main: () => <Login /> },
];

export default routes;