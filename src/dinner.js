import React from 'react'
import './App.css'

const Dinner = (props) => {
    return (
        <div>
            <h1>Today we are serving {props.dishName}</h1>
            <h1>Today we are also serving sweet {props.sweetDish}</h1>
        </div>
    )
}

export default Dinner