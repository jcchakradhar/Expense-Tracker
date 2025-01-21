import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
export default function Balance() {
    const {transactions}=useContext(GlobalContext);
    const totalAmount = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  return (
    <>
    <h4>Balance</h4>
    <h1 id="Balance">{totalAmount}</h1>
    </>
  )
}

