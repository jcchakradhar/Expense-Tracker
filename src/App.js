import React from 'react';
import  Header  from './components/Header';
import  Balance from './components/Balance';
import  Income_expenses  from './components/Income_expenses';
import  TransactionList  from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
       <Header></Header>
       <div className='container'>
        <Balance/>
        <Income_expenses/>
        <TransactionList/>
        <AddTransaction/>
        </div>
    </GlobalProvider>
  );
}

export default App;
