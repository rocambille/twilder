import { Form } from "react-router-dom";

export default function Login() {
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
