import React,{useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


export default function AddTransaction() {
    const[text,settext]=useState("");
    const[amount,setamount]=useState(0);
    const {addTransaction}=useContext(GlobalContext);
    const onSubmit=e=>{
        e.preventDefault();
        const newTransaction={
            id:Math.floor(Math.random()*1000),
            text,
            amount:+amount//to number
        }
        addTransaction(newTransaction)
    }
  return (
    <div>
       <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" value={text} onChange={(e)=>settext(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amount" value={amount} onChange={(e)=>setamount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}
