import { useState } from "react";
import './todo-actions_styles.css'
import api from "../../../utils/api";
import { TodoI } from "./type";
import { useNavigate } from "react-router-dom";
export default function CreateTodo() {
  const navigate = useNavigate();
  const initialState: TodoI = { title: "", body: "", isComplete: false };
  const [todo, setTodo] = useState(initialState);
  function onCreateTodo(): void {
    api.post("todos/", todo).then((r) => navigate("/todos/list"));
  }
  return (
    <div className="actions-container">
      <div className="actions_box">
      <h2 className="title_actions">Create Todo</h2>
        <input
          className="input_title"
          placeholder="Enter title"
          type="text" required  
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <input
          className="input_body"
          placeholder="Enter body"
          type="text" required  
          value={todo.body}
          onChange={(e) => setTodo({ ...todo, body: e.target.value })}
        />
        <button className="btn_add_todo" onClick={onCreateTodo}>Create</button>
      </div>
    </div>
  );
}
