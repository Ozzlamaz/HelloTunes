import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Featured from "../Pages/Featured";
import AlbumGrid from "../Pages/AlbumGrid";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <AlbumGrid /> },
      { path: "featured", element: <Featured /> },
    ],
  },
]);

export default router;
