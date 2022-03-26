import React, { useContext } from 'react'
import counterContext from '../ContextApi/CounterContext'

const Child = (props) => {
  let counter = useContext(counterContext)
  return (
    <div>
      <h2>Context Api</h2>
      This is child value: {counter[0]}
      <div className='mt-2'>
        <button onClick={() => counter[1](() => ++counter[0])} className="btn">Increment Context</button>
        <button onClick={() => counter[1](() => --counter[0])} className="btn ml-2">Decrement Context</button>
      </div>
    </div>
  )
}

export default Child