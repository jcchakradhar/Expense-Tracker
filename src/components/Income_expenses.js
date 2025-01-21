import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Income_expenses () {
    const {transactions}=useContext(GlobalContext);
    const { income, expenses } = transactions.reduce(
        (totals, transaction) => {
            if (transaction.amount > 0) {
                totals.income += transaction.amount; // Add positive amounts to income
            } else {
                totals.expenses += Math.abs(transaction.amount); // Add absolute value of negative amounts to expenses
            }
            return totals;
        },
        { income: 0, expenses: 0 } // Initial values
    );
  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p  className="money plus">+{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-{expenses}</p>
        </div>
      </div>
    </div>
  )
}


