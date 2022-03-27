import React, { useContext } from 'react'
import TransactionContext from '../Context/TransContext'

const TransactionHistory = () => {
    const { transactions, deleteTransaction, updateTransaction } = useContext(TransactionContext);

    const onDeleteClick = (e, ind) => {
        e.stopPropagation()
        deleteTransaction(ind)
    }

    const onEditClick = (e, transaction, ind) => {
        e.stopPropagation()
        let changeData = prompt(`Enter amount for ${transaction.desc}`, transaction.amount)
        if (changeData === null || changeData === undefined || changeData === "") {
            alert("Amount is required to proceed")
            return
        }
        if (!/^[-]?[0-9]*$/.test(changeData)) {
            alert("Amount should be a number")
            return
        }
        if (+changeData === +transaction.amount) {
            alert("Changed amount should be different than the previous amount")
            return
        }
        let updatedTransaction = {
            amount: +changeData,
            desc: transaction.desc,
        }
        updateTransaction(updatedTransaction, ind)
    }

    return (
        <span className='transaction-history'>
            <h3>Transaction History</h3>
            <hr />
            <ul>
                {
                    transactions.length > 0 ?
                        transactions.map((transaction, ind) => {
                            let border = transaction.amount > 0 ? 'border-plus' : transaction.amount < 0 ? 'border-minus' : ""
                            return (
                                <li className={border} key={ind} title="Click to edit" onClick={(e) => onEditClick(e, transaction, ind)}>
                                    <span>{transaction.desc}</span>
                                    <span>{border === "border-minus" && "-"}${Math.abs(transaction.amount)}</span>
                                    <div className='delete-button' onClick={(e) => onDeleteClick(e, ind)}>x</div>
                                </li>
                            )
                        })
                        :
                        <li className='justify-content-center'>
                            No Data Found
                        </li>

                }
            </ul>
        </span>
    )
}

export default TransactionHistory