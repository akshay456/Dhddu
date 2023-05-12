import React from 'react'
import { useState } from 'react';


const Content = () => {



    const nameChangeHandler=()=>{
    const names=['Earn', 'Grow', 'Give', 'hai', 'hello', 'are',  'you' , 'there', 'hoo'];
    const int= Math.floor(Math.random()*9)
  
    return names[int];
    
    }


  const [count, setCount]=useState(99);

    const incrementFunction=()=>{
      setCount(prevCount=>prevCount+1)
    }

    const decrementFunction=()=>{
      setCount(prevCount=>prevCount-1)
    }


   

  return (
    <main>
      <p >Content {nameChangeHandler()}</p>
    <button>Subscribe</button>
    <button onClick={decrementFunction}>-</button>
    <span>{count}</span>
    <button onClick={incrementFunction}>+</button>

    </main>
  )
}

export default Content