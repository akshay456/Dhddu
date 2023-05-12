import React, { useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
const Content=()=>{
    const [items, setItems]=useState([
        {
            id:1,
            checked:true,
            name:"HTML"
        },
        {
            id:2,
            checked:true,
            name:"CSS"
        },
        {
            id:3,
            checked:false,
            name:"JS"
        },
        {
            id:4,
            checked:true,
            name:"REACT"
        }
    ]);

   

  return (
    <main>
     <ul>
        {items.map((item)=>(
            <li className='item' key={item.id}>
                <input type="checkbox" checked={item.checked} />
                <label>{item.name}</label>
                <button><FaRegTrashAlt 
                role='button'
                tabIndex={0}
                /></button>
              
            </li>
        ))}
     </ul>
      
    

    </main>
  )
}

export default Content