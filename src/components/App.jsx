import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {

  const [todoItems, setTodoItems] = useState([]);

  function handleClick(item){
    setTodoItems(prevItems =>{
      return[...prevItems, item] 
      }
    );
  }

  function handleDelete(id){
    // console.log(id);
    setTodoItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index!== id;
      })}
    );  
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea handleClick={handleClick}/>
      <div>
        <ul>
          {todoItems.map((todoItem, index) =>  <TodoItem key={index} id={index} text={todoItem} onChecked={handleDelete} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
