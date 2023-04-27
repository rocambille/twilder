import { Form, redirect } from "react-router-dom";

import api from "../services/api";

import home from "./home";

function Login() {
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

    const redirectUrl = new URL(request.url).searchParams.get("redirect");

    return redirect(redirectUrl ?? home.path);
  },
};
