import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Details from "../Pages/Details";
import Home from "../Pages/Home";
import Result from "../Pages/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "post/:id",
        element: <Details />,
      },
      {
        path: "result/",
        element: <Result />,
      },
    ],
  },
]);

export default router;
