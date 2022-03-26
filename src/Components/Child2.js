import React, { useReducer } from 'react'
import CounterReducer from '../ReducerApi/CounterReducer'

const Child2 = (props) => {
    let [state, dispatch] = useReducer(CounterReducer, 1)
    console.table(state);
    return (
        <div className='mt-2'>
            <h2 className='mt-2'>UseReducer</h2>
            This is child value: {state}
            <div className='mt-2'>
                <button onClick={() => dispatch("INCREMENT")} className="btn">Increment Reducer</button>
                <button onClick={() => dispatch("DECREMENT")} className="btn ml-2">Decrement Reducer</button>
            </div>
        </div>
    )
}

export default Child2