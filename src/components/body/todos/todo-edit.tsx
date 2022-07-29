import { useEffect, useState } from "react";
import api from "../../../utils/api";
import { TodoI } from "./type";
import { useNavigate, useParams } from "react-router-dom";
export default function EditTodo() {
  const params = useParams();   
  const navigate = useNavigate();
  const initialState: TodoI = { title: "", body: "", isComplete: false };
  const [todo, setTodo] = useState(initialState);
  useEffect(() => {
    api.get("todos/" + params.userId).then((r) => setTodo(r.data));
  }, []);
  function onEditeTodo(): void {
    api.put("todos/" + todo.id, todo).then((r) => navigate("/todos/list"));
  }
  return (
    <div className="actions-container">
      <div className="actions_box">
      <h2 className="title_actions">Edite Todo</h2>
        <input
          aria-label="Search"
          className="input_title"
          type="text" required  
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <input 
          aria-label="Search"
          className="input_body"
          type="text" required  
          value={todo.body}
          onChange={(e) => setTodo({ ...todo, body: e.target.value })}
        />
        <button className="btn_add_todo" onClick={onEditeTodo}>Edite Todo</button>
      </div>
    </div>
  );
}
