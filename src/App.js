import React from 'react';
import './App.css';

// Import Global Provider
import { GlobalProvider } from './Context/GlobalState'

// Components
import Header  from './Components/header'
import Balance from './Components/Balance'
import { AccountSummary } from './Components/AccountSummary'
import TransactionHistory  from './Components/TransactionHistory'
import MakeTransaction from './Components/MakeTransaction'

function App() {
  return  (
    <GlobalProvider>
    <div className="main">
      <Header />
      <div className="container">    
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <MakeTransaction />

      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
