import { NavLink, Outlet, redirect } from "react-router-dom";

import home from "./pages/home";
import login from "./pages/login";
import register from "./pages/register";
import resource from "./pages/resource";

import api from "./services/api";

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
    element: <App />,
    children: [
      home,
      login,
      register,
      {
        loader: (data) => {
          const url = new URL(data.request.url);

          return (
            api.defaults.headers.authorization ??
            redirect(
              `${login.path}?redirect=${url.pathname}${url.search}${url.hash}`
            )
          );
        },
        children: [resource],
      },
    ],
  },
];
