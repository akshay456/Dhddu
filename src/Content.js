import React from "react"
import ItemList from "./ItemList"


const Content=({items, handleCheck, handleDelete})=>{
   
    

   

  return (
    <main>
        {(items.length) ? (
            <ItemList items={items}
    
            handleCheck={handleCheck}
            handleDelete={handleDelete}/>
     

        ) : <p> wow you clear all the list in you to-do </p>
                }
    

    </main>
  )
}

export default Content