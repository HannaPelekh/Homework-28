import { TodoItemPropsI } from "../type";
import "./todo-item.css";
import { useNavigate } from "react-router-dom";
export default function TodoItem({ todo, cb }: TodoItemPropsI): JSX.Element {
  const navigate = useNavigate();
  function onEdit() {
    navigate("/todos/" + todo.id);
  }  
  return (
    <div className={todo.isComplete ? "isComplete" : "todo_items"}>
      <button aria-label="close_btn" className="close_btn" onClick={()=> cb (todo.id!, "delete")}
      
      ></button>
      <div className="todo-box">
        <div className="complite_btn-container">
          <button aria-label="complite_btn" onClick={()=> cb (todo.id!, "complete")} className={todo.isComplete ? "hidden_btn" : "complite_btn"} 
          ></button>
        </div>
        <div className="text-box">
          <div className="title">{todo.title}</div>
          <div className="body">{todo.body}</div>      
        </div>
      </div>
      <button className="edit_btn" onClick={onEdit}>Edit Todo</button>
    </div>
  );
}
