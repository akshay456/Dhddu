import React from 'react';
import { useState } from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';



const App=()=> {

  const [items, setItems]=useState(JSON.parse(localStorage.getItem('todo_list')));

   const [search, setSearch] = useState()
  const addItem =(name)=> {
    const id= items.length ? items[items.length-1].id+1 : 1
    const addNewItem = {id, checked:false, name}
    const listItems = [...items, addNewItem]
    console.log(name)
    console.log(newItem)
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
    }
  
  
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
    e.preventDefault()
    if (!newItem) return;
       console.log(newItem)
      addItem(newItem)
      setNewItem("")
  }
  

  
  return (
    <div className="App">
    
      <Header />

      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}/>
        <SearchItem/>
      <Content  items={items}
    
    handleCheck={handleCheck}
    handleDelete={handleDelete}/>
      <Footer items={items}/>
    </div>
  );
}

export default App;
