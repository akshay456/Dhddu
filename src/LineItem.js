import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li className='item' key={item.id}>
    <input type="checkbox" 
    onChange={()=>handleCheck(item.id)}
    checked={item.checked} />
    <label style={(item.checked)? 
    {textDecoration:'underline'} : 
    {color:"red"}}
     onDoubleClick={()=> handleCheck(item.id)}>{item.name}</label>
    <button onClick={()=>handleDelete(item.id)}><FaRegTrashAlt 
    role='button'
    tabIndex={0}
    aria-label={`Delete ${item.item}`}
    /></button>
  
</li>
  )
}

export default LineItem