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
          <Route index element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/todos" element={<CreateTodoBTN />}>
          <Route path="create" element={<CreateTodo />}></Route>
            <Route path=":userId" element={<EditTodo />}></Route>
            <Route path="list" element={<TodoList/>}></Route>            
          </Route>
          <Route path="/contacts" element={<CreateContactBTN />}>
          <Route path="create" element={<CreateContact />}></Route>
            <Route path=":userId" element={<EditContact />}></Route> 
            <Route path="list" element={<ContactList />}></Route>            
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
