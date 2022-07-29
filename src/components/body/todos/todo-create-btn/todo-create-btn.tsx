import './todo-create-btn.css'
import { useNavigate, Outlet } from "react-router-dom";
export default function CreateTodoBTN() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <button className="create_todo_btn" onClick={() => navigate("create")}>Create Todo</button>      
      <Outlet />
    </div>
  );
}
