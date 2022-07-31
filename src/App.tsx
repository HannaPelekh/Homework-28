import "./App.css";
import Header from "./components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/body/home/home";
import { CreateTodoBTN, TodoList } from "./components/body/todos";
import CreateTodo from "./components/body/todos/todo-create";
import EditTodo from "./components/body/todos/todo-edit";
import { CreateContactBTN, ContactList } from "./components/body/contacts";
import CreateContact from "./components/body/contacts/contact-create";
import EditContact from "./components/body/contacts/contact-edit";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>          
          <Route path="/" element={<Home />}></Route>
          <Route path="/todos" element={<CreateTodoBTN />}>
            <Route index element={<TodoList/>}></Route> 
          <Route path="create" element={<CreateTodo />}></Route>
            <Route path=":todoId" element={<EditTodo />}></Route>                       
          </Route>
          <Route path="/contacts" element={<CreateContactBTN />}>
            <Route index element={<ContactList />}></Route>  
          <Route path="create" element={<CreateContact />}></Route>
            <Route path=":contactId" element={<EditContact />}></Route>                       
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
