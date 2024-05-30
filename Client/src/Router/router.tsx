import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import SearchPage from "../Pages/SearchPage";
import InfiniteSeachPage from "../Pages/InfiniteSeachPage";
import AlbumDetails from "../Pages/AlbumDetailsPage";
import ArtistDetails from "../Pages/ArtistDetailsPage";
import TrackDetails from "../Pages/TrackDetailsPage";
import ErrorPage from "../Pages/ErrorPage";

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
      {
        path: "details/album/:id",
        element: <AlbumDetails />,
      },
      {
        path: "details/artist/:id",
        element: <ArtistDetails />,
      },
      {
        path: "details/track/:id",
        element: <TrackDetails />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
