import React from 'react'

const Content = () => {
    const nameChangeHandler=()=>{
    const names=['Earn', 'Grow', 'Give', 'hai', 'hello', 'are',  'you' , 'there', 'hoo'];
    const int= Math.floor(Math.random()*9)
    console.log(int)
    return names[int];
    
    }

  return (
    <div>Content {nameChangeHandler()}</div>
  )
}

export default Content