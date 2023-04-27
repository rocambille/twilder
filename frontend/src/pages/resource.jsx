import { Form, json, useLoaderData } from "react-router-dom";
import ResourceSummary from "../components/ResourceSummary";

import api from "../services/api";

function Resource() {
  const resource = useLoaderData();

  return (
    <article>
      <ResourceSummary.Header data={resource} />
      {api.defaults.headers.authorization && (
        <Form method="post">
          <input type="text" name="content" />

          <button type="submit">Send</button>
        </Form>
      )}
      {resource.comments
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .map((comment) => (
          <p key={comment.id}>{comment.content}</p>
        ))}
    </article>
  );
}

export default {
  path: "/resources/:id",
  element: <Resource />,
  loader: async ({ params }) => {
    const { data } = await api.get(`/resources/${params.id}`);

    return data;
  },
  action: async ({ params, request }) => {
    const formData = await request.formData();

    const { data, status, ...result } = await api.post(
      `/resources/${params.id}/comments`,
      Object.fromEntries(formData.entries())
    );

    if (status !== 201) {
      throw result;
    }

    return json(data);
  },
};
