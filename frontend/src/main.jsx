import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import api from "./services/api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
        action: async ({ request }) => {
          const formData = await request.formData();

          const { data, ...result } = await api.post(
            "/login",
            Object.fromEntries(formData.entries())
          );

          const { token } = data;

          if (!token) {
            throw result;
          }

          api.defaults.headers.authorization = `Bearer ${token}`;

          return redirect("/");
        },
      },
      {
        path: "/register",
        element: <Register />,
        action: async ({ request }) => {
          const formData = await request.formData();

          const { status, ...result } = await api.post(
            "/users",
            Object.fromEntries(formData.entries())
          );

          if (status !== 201) {
            throw result;
          }

          return redirect("/login");
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
