import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import SearchPage from "../Components/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "search/:query", element: <SearchPage /> },
      { path: "search/:type/:query", element: <SearchPage /> },
    ],
  },
]);

export default router;
