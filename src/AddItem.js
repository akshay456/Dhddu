import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem, setNewItem,handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem"> Add Item : </label>
                <input id="additem" 
                placeholder="enter the do-do activity" 
                type="text"  
                value={newItem} 
                 onChange={(e)=>(setNewItem(e.target.value))}

                autoFocus required/>
       
        <button type='Submit' aria-label='Add Item'>
            <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem