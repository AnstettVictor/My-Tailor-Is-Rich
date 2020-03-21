// == Import npm
import React from 'react';

// == Import
import Columns from '../Columns';
import Login from '../Login';
import Balance from '../Balance';


import './style.scss';

// == Composant
const App = () => (
  <div className="app">
    <header className="header">
      <Login />
      <Balance />
    </header>
    <Columns />

  </div>
);

// == Export
export default App;
