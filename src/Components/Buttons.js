import React from 'react'

const Buttons = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>{props.title}</button>
  )
}

export default Buttons