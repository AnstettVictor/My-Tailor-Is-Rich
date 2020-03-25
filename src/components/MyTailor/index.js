// == Import npm
import React from 'react';
import { Divider, Header, Icon } from 'semantic-ui-react';

// == Import
import Columns from '../../containers/Columns';
import Login from '../Login';
import Balance from '../Balance';


import data from '../../data/data';
import './style.scss';


const {
  extraExpanseList,
  fixedExpanseList,
  incomeList,
  balance,
  user,
} = data;


// == Composant
const App = () => (
  <div className="app">
    <header className="header">
      <Login user={user} />
      <Balance balance={balance} />
    </header>
    <Divider horizontal>
      <Header as='h4'>
        <Icon name="money bill alternate outline" />
        Etes-vous riche ?
      </Header>
    </Divider>
    <Columns
      extraExpanseList={extraExpanseList}
      fixedExpanseList={fixedExpanseList}
      incomeList={incomeList}
    />

  </div>
);

// == Export
export default App;
