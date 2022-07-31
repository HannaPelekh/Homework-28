import { useEffect, useState } from "react";
import api from "../../../utils/api";
import { ContactI } from "./type";
import { useNavigate, useParams } from "react-router-dom";
export default function EditContact() {
  const params = useParams();   
  const navigate = useNavigate();
  const initialState: ContactI = { name: "", lastName: "", id: "", phone: ""  };
  const [contact, setContact] = useState(initialState);
  useEffect(() => {
    api.get("contacts/" + params.contactId).then((r) => setContact(r.data));
  }, []);
  function onEditeContact(): void {
    api.put("contacts/" + contact.id, contact).then((r) => navigate("/contacts/list"));
  }
  return (
    <div className="actions-contact_container">
      <div className="actions-contact_box">
      <h2 className="title-contact_actions">Edite Contact</h2>
      <div className="actions_icon"></div>
        <input
          aria-label="Search"          
          className="input_name"
          type="text" required            
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
        />
        <input
          aria-label="Search" 
          className="input_lastName"
          type="text" required  
          value={contact.lastName}          
          onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
        />
        <input
          aria-label="Search" 
          className="input_phone"
          type="number" required                    
          value={contact.phone}
          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
        />
        <button className="btn_add_contact" onClick={onEditeContact}>Edite Contact</button>
      </div>
    </div>
  );
}
