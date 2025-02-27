import { createBrowserRouter } from "react-router-dom";
import DetailsPage from "../page/DetailsPage";
import Home from "../page/Home";
import Movies from "../page/Movies";
import Tvs from "../page/Tvs";
import Layout from "./Layout";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/tvs",
        element: <Tvs />,
      },
      {
        path: "/details/:type/:id",
        element: <DetailsPage />,
      },
    ],
  },
]);

export default route;
