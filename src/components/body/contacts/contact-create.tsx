import { useState } from "react";
import './contact_actions-styles.css'
import api from "../../../utils/api";
import { ContactI } from "./type"; 
import { useNavigate } from "react-router-dom";
export default function CreateContact() {
  const navigate = useNavigate();
  const initialState: ContactI = { name: "", lastName: "", id: "", phone: ""  };
  const [contact, setContact] = useState(initialState);
  function onCreateContact(): void {
    api.post("contacts/", contact).then((r) => navigate("/contacts/list"));
  }
  return (
    <div className="actions-contact_container">
      <div className="actions-contact_box">
      <h2 className="title-contact_actions">Create Contact</h2>
      <div className="actions_icon"></div>
        <input
          className="input_name"
          type="text" required            
          placeholder="Enter Name"
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
        />
        <input
          className="input_lastName"
          type="text" required  
          value={contact.lastName}          
          placeholder="Enter Last Name"
          onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
        />
        <input
          className="input_phone"
          type="number" required                  
          placeholder="+380997777777"
          value={contact.phone}
          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
        />
        <button className="btn_add_contact" onClick={onCreateContact}>Create Contact</button>
      </div>
    </div>
  );
}







// import { useState } from "react";
// import './actions.css'
// import api from "../../utils/api";
// import { TodoI } from "./type";
// import { useNavigate } from "react-router-dom";
// export default function CreateTodo() {
//   const navigate = useNavigate();
//   const initialState: TodoI = { title: "", body: "", isComplete: false };
//   const [todo, setTodo] = useState(initialState);
//   function onCreateTodo(): void {
//     api.post("todos/", todo).then((r) => navigate("/todos/list"));
//   }
//   return (
//     <div className="actions-container">
//       <div className="actions_box">
//       <h2 className="title_actions">Create Todo</h2>
//         <input
//           className="input_title"
//           type="text"
//           value={todo.title}
//           onChange={(e) => setTodo({ ...todo, title: e.target.value })}
//         />
//         <input
//         className="input_body"
//           type="text"
//           value={todo.body}
//           onChange={(e) => setTodo({ ...todo, body: e.target.value })}
//         />
//         <button className="btn_add_todo" onClick={onCreateTodo}>Create</button>
//       </div>
//     </div>
//   );
// }
