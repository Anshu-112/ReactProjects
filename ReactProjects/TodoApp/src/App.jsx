import Todo from "./components/Todo"
import Todoitems from "./components/Todoitems"
import TodoPlaceholder from "./components/TodoPlaceholder"
import WelcomeMssg from "./components/welcomeMssg"


import "./App.css"
import { useState } from "react";



function App(){
  

  const [todoItems,setTodoItems] =useState([ ]);


  const handleNewItem = (name, date)=>{
    console.log(`New item Added : ${name} Date : ${date}`);
    const newTodoItems =[...todoItems , { name:name,date:date}];

    setTodoItems(newTodoItems);

  };

const handledeleteItem =(todoName)=>{
  const newTodoItems = 
  todoItems.filter((item) => item.name != todoName);
  
  setTodoItems(newTodoItems);

  
  
};

  return (<center class='todo-container'>
    <Todo></Todo>
    <TodoPlaceholder onNewItem={handleNewItem}></TodoPlaceholder>
    {todoItems.length==0 && <WelcomeMssg></WelcomeMssg>}
    <Todoitems todoItems={todoItems} onDelete={handledeleteItem}></Todoitems>
    
 

  
  </center>
  );
}

export default App
