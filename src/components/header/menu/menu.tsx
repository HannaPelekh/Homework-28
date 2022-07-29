import { MenuI } from "./type";
import { Link } from "react-router-dom";
import './menu.css'
export default function Menu() {
  const menu: MenuI[] = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Todos",
      link: "/todos/list",
    },
    {
      title: "Contacts",
      link: "/contacts/list",
    },
  ];
  return (
    <div className="header">
      <div className="menu">
        {menu.map((e, i) => (
          <div key={i}>
            <Link className="link" to={e.link}>{e.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
