import React, { useContext } from 'react'
import TransactionContext from '../Context/TransContext'

const ExpenseBoard = () => {
    let { transactions } = useContext(TransactionContext);

    let getIncome = () => {
        let amounts = transactions.map(transaction => transaction.amount)
        let income = amounts.filter(amount => amount > 0).reduce((acc, item) => acc + item, 0).toFixed(2);
        return income
    }

    let getExpense = () => {
        let amounts = transactions.map(transaction => transaction.amount)
        let expense = (amounts.filter(amount => amount < 0).reduce((acc, item) => acc + item, 0) * -1).toFixed(2);
        return expense
    }

    return (
        <div className='expense-board'>
            <span>
                <h3>Income</h3>
                <div className={getIncome() > 0 && "plus"}>${getIncome()}</div>
            </span>
            <span>
                <h3>Expense</h3>
                <div className={getExpense() > 0 && "minus"}>${getExpense()}</div>
            </span>
        </div>
    )
}

export default ExpenseBoard