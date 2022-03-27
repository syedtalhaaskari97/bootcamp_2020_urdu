import { createContext, useReducer } from "react";
import TransactionReducer from "../Reducer/TransReducer";

const initialTransactions = []

let TransactionContext = createContext(initialTransactions);

export default TransactionContext;

export const TransactionProvider = ({ children }) => {

    const [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    const addTransaction = (transaction) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction,
        })
    }

    const deleteTransaction = (ind) => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: ind,
        })
    }

    const updateTransaction = (transaction, ind) => {
        dispatch({
            type: "UPDATE_TRANSACTION",
            payload: {
                transaction,
                ind,
            },
        })
    }

    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction,
            deleteTransaction,
            updateTransaction,
        }}>
            {children}
        </TransactionContext.Provider>
    )

}