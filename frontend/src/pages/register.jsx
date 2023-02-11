import { Form, redirect } from "react-router-dom";

import api from "../services/api";

import login from "./login";

function Register() {
  return (
    <Form method="post">
      <div>
        <label htmlFor="email">email</label>
        <input name="email" type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input name="password" type="password" id="password" />
      </div>
      <button type="submit">send</button>
    </Form>
  );
}

export default {
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

    return redirect(login.path);
  },
};
