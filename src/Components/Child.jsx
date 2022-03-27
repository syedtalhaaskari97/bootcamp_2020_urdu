import React, { useContext, useState } from 'react'
import TransactionContext from '../ContextApi/TransContext'

const Child = () => {
  let { transactions, addTransaction } = useContext(TransactionContext)
  let [newDesc, setDesc] = useState(() => "")
  let [newAmount, setAmount] = useState(() => 0)

  const handleAddition = (e) => {
    e.preventDefault();

    let newTransaction = {
      desc: newDesc,
      amount: +newAmount,
    }

    addTransaction(newTransaction)
    setDesc(() => "")
    setAmount(() => 0)
  }

  const getIncome = () => {
    let income = 0;
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) {
        income += transactions[i].amount
      }
    }
    return income
  }

  const getExpense = () => {
    let expense = 0;
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) {
        expense += transactions[i].amount
      }
    }
    return expense
  }

  return (
    <div className="container">
      <h1 className='text-center'>Expense Tracker</h1>

      <h3>Your Balance<br />${getIncome() + getExpense()}</h3>
      <div className='expense-container'>
        <h3>INCOME <br />${getIncome()}</h3>
        <h3>EXPENSE <br />${getExpense()}</h3>
      </div>

      <h3>History</h3>
      <hr />
      <ul className="transaction-list">
        {transactions.map((transaction, ind) => (
          <li key={ind}>
            <span>{transaction.desc}</span>
            <span>{transaction.amount}</span>
          </li>
        ))}
      </ul>

      <h3>Add new transaction</h3>
      <hr />
      <form className='transaction-form' onSubmit={handleAddition}>
        <label>
          Enter Description <br />
          <input
            type="text"
            required
            value={newDesc}
            onChange={e => setDesc(() => e.target.value)}
            placeholder="Description"
          />
        </label>
        <label>
          Enter Amount <br />
          <input
            type="number"
            required
            value={newAmount}
            onChange={e => setAmount(() => e.target.value)}
            placeholder="Amount"
          />
        </label>

        <input type={"submit"} value="Add Transaction" />
      </form>

    </div>
  )
}

export default Child