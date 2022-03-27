const TransactionReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TRANSACTION":
            return [action.payload, ...state];
        case "DELETE_TRANSACTION":
            return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)]
        case "UPDATE_TRANSACTION":
            return [...state.slice(0, action.payload.ind), action.payload.transaction, ...state.slice(action.payload.ind + 1)]
        default:
            return state
    }
}

export default TransactionReducer