import React from 'react';
import { useState } from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import AddItem from './AddItem';



const App=()=> {

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
  
  const handleCheck =(id)=> {
    const listItems=items.map((item)=>
        item.id===id?{...item, checked:!item.checked}:item)
        setItems(listItems)
        localStorage.setItem("todo_list", JSON.stringify(listItems))
        console.log("checked")
    }
  
  
  const handleDelete=(id)=>{
    const listItems=items.filter((item)=>
    item.id!==id )
    setItems(listItems)
    console.log("deleted")
  }


  const [newItem, setNewItem]= useState("");

  const handleSubmit=(e)=>{
        console.log("submitted")
  }
  

  
  return (
    <div className="App">
    
      <Header />
      <AddItem/>
      <Content  items={items}
    
    handleCheck={handleCheck}
    handleDelete={handleDelete}/>
      <Footer items={items}/>
    </div>
  );
}

export default App;
