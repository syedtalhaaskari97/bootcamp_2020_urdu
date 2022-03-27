import { createContext, useReducer } from "react";
import TransactionReducer from "../ReducerApi/TransReducer"

let initialTransactions = [
    { amount: 500, desc: "Cash" },
    { amount: -40, desc: "Book" },
    { amount: 200, desc: "Camera" },
]

let TransactionContext = createContext(initialTransactions);

export default TransactionContext

export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions)

    const addTransaction = (transaction) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction,
        })
    }

    return (
        <TransactionContext.Provider value={{
            addTransaction,
            transactions: state,
        }}>
            {children}
        </TransactionContext.Provider>
    )

}