import React from 'react';
import './App.css';

// Components
import Header  from './Components/header'
import Balance from './Components/Balance'
import { AccountSummary } from './Components/AccountSummary'
import TransactionHistory  from './Components/TransactionHistory'
import MakeTransaction from './Components/MakeTransaction'

function App() {
  return  (
    <div className="main">
      <Header />
      <div className="container">    
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <MakeTransaction />

      </div>
    </div>
  );
}

export default App;
