import React, { useState } from 'react'
import Square from './Square'
import img from '../images/tic.png'
import '../App.css'
const Board = () => {
    const [square,setSquare]=useState(Array(9).fill(null))
    const [X,setX]=useState(true)
    let winner=calculateWinner(square)
    let status
    if (winner) {
        status = 'Winner: ' + winner;
        alert('Winner: '+winner);
    } 
    else {
        status = 'Player Turn: ' + (X ? 'X' : 'O');
    }
    
    const insertSquare=(i)=>{
        return(
            <Square value={square[i]} onClick={()=>handleClick(i)} />
        )
        
    }
    function handleClick(i){
        if(square[i]==null){
            const squares=square.slice()
        squares[i]=X?'X':'O';
        setSquare(squares)
        setX(!X)
        }
        else{
            alert("Can't perform that")
        }
    }
    function calculateWinner(squares){
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    return (
        <div className='outer'>
            <img src={img} alt='tic-tac-toe'></img>
        <div className='container'>
        {insertSquare(0)}
        {insertSquare(1)}
        {insertSquare(2)}
        {insertSquare(3)}
        {insertSquare(4)}
        {insertSquare(5)}
        {insertSquare(6)}
        {insertSquare(7)}
        {insertSquare(8)}
    </div>
    <h1>{status}</h1>
    </div>
    )
}

export default Board
