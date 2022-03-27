import React, { useContext, useState } from 'react'
import TransactionContext from '../Context/TransContext'

const AddTransaction = () => {
    let [desc, setDesc] = useState(() => "")
    let [amount, setAmount] = useState(() => 0)

    let { addTransaction } = useContext(TransactionContext);

    const onSubmit = e => {
        e.preventDefault()

        if (desc === "") {
            alert("Kindly fill the description")
            return
        }

        let transaction = {
            desc,
            amount: +amount,
        }

        addTransaction(transaction)

        setDesc(() => "")
        setAmount(() => 0)
    }

    return (
        <span className='add-transaction'>
            <h3>Add New Transaction</h3>
            <hr />
            <form onSubmit={onSubmit}>
                <label>
                    Description <br />
                    <input type={"text"} required placeholder={"Description"} value={desc} onChange={e => setDesc(() => e.target.value)} />
                </label>
                <label>
                    Transaction Amount <br />
                    <input type={"number"} required placeholder={"Transaction Amount"} value={amount} onChange={e => setAmount(() => e.target.value)} />
                </label>
                <input type="submit" value="Add Transaction" />
            </form>
        </span>
    )
}

export default AddTransaction