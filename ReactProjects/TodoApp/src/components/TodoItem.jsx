function TodoItem({todoName,todoDate, onDelete}){
    return (
        <div className="container">
  
 

  <div className="row my-row">
    <div className="col-5">
     {todoName}
    </div>
    <div className="col-4">
   {todoDate}
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-danger my-bttn" 
    onClick={()=>onDelete(todoName)}
    >Delete</button>
    </div>
  </div>
</div>
    )
}
export default TodoItem;