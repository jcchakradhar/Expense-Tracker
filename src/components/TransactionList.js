import React,{useContext} from 'react'
import Transaction from './Transaction'//if default dont use curly braces
import { GlobalContext } from '../context/GlobalState'
export default function TransactionList() {
    const {transactions}=useContext(GlobalContext);
    //console.log(context);
  return (
    <div>
       <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction=>(<Transaction key={transaction.id} transaction={transaction} ></Transaction> )

        )}
      </ul>
    </div>
  )
}
