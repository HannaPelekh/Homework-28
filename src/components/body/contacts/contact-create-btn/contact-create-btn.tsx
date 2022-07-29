import './contact-create-btn.css'
import { useNavigate, Outlet } from "react-router-dom";
export default function CreateContactBTN() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <button className="create_contact_btn" onClick={() => navigate("create")}>+</button>      
      <Outlet />
    </div>
  );
}
