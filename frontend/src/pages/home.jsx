import { Link, useLoaderData } from "react-router-dom";
import TwildSummary from "../components/TwildSummary";

import api from "../services/api";

function Home() {
  const twilds = useLoaderData();

  return (
    <ul>
      {twilds.map((twild) => (
        <li key={twild.id}>
          <Link to={`/twilds/${twild.id}`}>
            <TwildSummary data={twild} />
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
    const { data } = await api.get("/twilds");

    return data;
  },
};
