import React, {useEffect, useState } from "react";
import api from "../../../../utils/api";
import ContactItem from "../contact-item/contact_item";
import "./contacts-list.css"
import { ContactI } from "../type";
const initialState:ContactI[] = []
export default function ContactList() {
  const [contacts, setContacts] = useState(initialState);
  useEffect(() => {
    api.get("contacts").then((r) => setContacts(r.data.reverse()));
  }, []);
  
  function onDelete(id: string, type: 'delete'): void {       
      api.delete("contacts/"+ id).then((r) => {        
        setContacts(contacts.filter((contact) => contact.id !== id))      
    }
  )}

  return (
    <div className="contact_list">
      {contacts &&
        (contacts as ContactI[]).map<JSX.Element>((e) => (
          <ContactItem key={e.id} cb={onDelete} contact={e}></ContactItem>
        ))}
    </div>
  );
}    
