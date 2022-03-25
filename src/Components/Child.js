import React, { useContext } from 'react'
import counterContext from '../ContextApi/CounterContext'

const Child = (props) => {
  let counter = useContext(counterContext)
  return (
    <div>
      This is child value: {counter[0]}
      <div className='mt-2'>
        <button onClick={() => counter[1](() => ++counter[0])} className="btn mx-auto">Increment</button>
      </div>
    </div>
  )
}

export default Child