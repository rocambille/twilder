import { Link, useLoaderData } from "react-router-dom";
import ResourceSummary from "../components/ResourceSummary";

import api from "../services/api";

function Home() {
  const resources = useLoaderData();

  return (
    <ul>
      {resources.map((resource) => (
        <li key={resource.id}>
          <Link to={`/resources/${resource.id}`}>
            <ResourceSummary data={resource} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default {
  path: "/",
  element: <Home />,
  loader: async () => {
    const { data } = await api.get("/resources");

    return data;
  },
};
