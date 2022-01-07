import React from 'react'
import '../App.css'
const Square = props => {
    
    return (
            <button className='btn' onClick={()=>{props.onClick()}}>{props.value}</button>
    )
}

export default Square
