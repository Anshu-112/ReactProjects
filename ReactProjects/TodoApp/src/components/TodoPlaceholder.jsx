import { useState } from "react";

function TodoPlaceholder({onNewItem}){

const [todoName, setTodoName]=useState();
const [todoDate, setTodoDate]=useState();

const handleNameChange=(event)=>{
  setTodoName(event.target.value);


};
const handleDateChange=(event)=>{
  setTodoDate(event.target.value);
};

const handleAddButton=()=>{
  onNewItem(todoName,todoDate);
  setTodoName("");
  setTodoDate("");

};



    return (
        <div className="container text-center">
        <div className="row my-row">
          <div className="col-5">
            <input type="text" placeholder="Enter Todo here"
            value={todoName}
            onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input type="date"
            value={todoDate}
            onChange={handleDateChange}
            />
          </div>
          <div className="col-2">
          <button type="button" className="btn btn-success my-bttn" 
          onClick={handleAddButton}>Add</button>
          </div>
        </div>
        </div>
    );
}

export default TodoPlaceholder;