import { useLoaderData } from "react-router-dom";
import ResourceDetails from "../components/ResourceDetails";

import api from "../services/api";

function Resource() {
  const resource = useLoaderData();

  return <ResourceDetails data={resource} />;
}

export default {
  path: "/resources/:id",
  element: <Resource />,
  loader: async ({ params }) => {
    const { data } = await api.get(`/resources/${params.id}`);

    return data;
  },
};
