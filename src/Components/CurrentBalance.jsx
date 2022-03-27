import React, { useContext } from 'react'
import TransactionContext from '../Context/TransContext';

const CurrentBalance = () => {

    let { transactions } = useContext(TransactionContext);

    let getTotal = () => {
        let amounts = transactions.map(transaction => transaction.amount)
        let income = amounts.filter(amount => amount > 0).reduce((acc, item) => acc + item, 0).toFixed(2);
        let expense = (amounts.filter(amount => amount < 0).reduce((acc, item) => acc + item, 0) * -1).toFixed(2);
        return income - expense
    }

    let sign = getTotal() > 0 ? "plus" : getTotal() < 0 ? "minus" : ""

    return (
        <div className='current-balance'>
            <div>Current Balance</div>
            <h2 className={sign}>{sign === "minus" && "-"}${Math.abs(getTotal())}</h2>
        </div>
    )
}

export default CurrentBalance