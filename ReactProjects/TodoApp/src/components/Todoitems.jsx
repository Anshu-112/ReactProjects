import TodoItem from "./TodoItem"

const Todoitems =({todoItems,onDelete})=>{
    return (
        <div className="item-container">
{todoItems.map((item)=> (<TodoItem todoDate={item.date} todoName={item.name} onDelete={onDelete}>

</TodoItem>
))}
        </div>
    );
 
}
export default Todoitems;