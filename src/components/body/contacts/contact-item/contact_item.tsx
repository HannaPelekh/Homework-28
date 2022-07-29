import { ContactItemPropsI } from "../type";
import "./contact_item.css";
import { useNavigate } from "react-router-dom";
export default function ContactItem({ contact, cb }: ContactItemPropsI): JSX.Element {
  const navigate = useNavigate();
  function onEdit() {
    navigate("/contacts/" + contact.id);
  }    
  return (
    <div className="contact_box">
      <div className="icon"></div>
      <div className="Names">
        <p className="first_name">{contact.name}</p>
        <p className="last_name">{contact.lastName}</p>
      </div>
      <p className="phone">{contact.phone}</p> 
      <div className="BTN_container">
        <button aria-label="edit_btn" className="contact_edit_btn" onClick={onEdit}></button>
        <button aria-label="delete_btn" className="contact_delete_btn" onClick={()=> cb (contact.id!, "delete")}
        ></button>
      </div>                                             
    </div>
  );
}

