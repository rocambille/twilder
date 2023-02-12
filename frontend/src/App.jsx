import { NavLink, Outlet } from "react-router-dom";

import home from "./pages/home";
import login from "./pages/login";
import register from "./pages/register";
import resource from "./pages/resource";

import "./App.css";

const link = (page, text) => (
  <li>
    <NavLink to={page.path}>{text}</NavLink>
  </li>
);

function App() {
  return (
    <>
      <nav>
        <ul>
          {link(home, "home")}
          {link(login, "login")}
          {link(register, "register")}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default [
  {
    path: "/",
    element: <App />,
    children: [home, login, register, resource],
  },
];
