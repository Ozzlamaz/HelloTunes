import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import SearchPage from "../Pages/SearchPage";
import InfiniteSeachPage from "../Pages/InfiniteSeachPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "search/:q",
        element: <SearchPage />,
      },
      {
        path: "search/:type/:q",
        element: <InfiniteSeachPage />,
      },
    ],
  },
]);

export default router;
