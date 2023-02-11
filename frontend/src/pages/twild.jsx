import { useLoaderData } from "react-router-dom";
import TwildDetails from "../components/TwildDetails";

import api from "../services/api";

function Twild() {
  const twild = useLoaderData();

  return <TwildDetails data={twild} />;
}

export default {
  path: "/twilds/:id",
  element: <Twild />,
  loader: async ({ params }) => {
    const { data } = await api.get(`/twilds/${params.id}`);

    return data;
  },
};
