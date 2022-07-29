import React, {useEffect, useState } from "react";
import api from "../../../../utils/api";
import TodoItem from "../todo-item/todo-item";
import "./todo-list.css"
import { TodoActionType, TodoI } from "../type";
const initialState:TodoI[] = []
export default function TodoList() {
  const [todos, setTodos] = useState(initialState);
  useEffect(() => {
    api.get("todos").then((r) => setTodos(r.data.reverse()));
  }, []);  
  function onTodoAction(id: string, type: TodoActionType): void {
    if(type === 'complete'){ 
      const editedTodo = todos.find((todo) => todo.id === id)
      editedTodo!.isComplete = true;
      api.put("todos/" + id, editedTodo)
            .then(r => {setTodos([...todos.map((t) => t.id===r.data.id ? r.data : t)])} )
    }    
    if(type === 'delete'){ 
      api.delete("todos/"+ id).then((r) => {        
        setTodos(todos.filter((todo) => todo.id !== id))
      })
    }
  }
  return (
    <div className="list">
      {todos &&
        (todos as TodoI[]).map<JSX.Element>((e) => (
          <TodoItem key={e.id} cb={onTodoAction} todo={e}></TodoItem>
        ))}
    </div>
  );
}
