import { useParams } from "react-router-dom";
import useItemDetails from "../hooks/useItemDetailsPage";
import AlbumDetails from "../Components/Details/AlbumDetails";
import ArtistDetails from "../Components/Details/ArtistDetails";
import TrackDetails from "../Components/Details/TrackDetails";

const itemDetailsPage = () => {
  const params = useParams();
  const { data, isLoading } = useItemDetails(params);

  if (params.type === "album")
    return <AlbumDetails album={data} isLoading={isLoading} />;
  if (params.type === "artist")
    return <ArtistDetails artist={data} isLoading={isLoading} />;
  if (params.type === "track")
    return <TrackDetails track={data} isLoading={isLoading} />;
};
export default itemDetailsPage;
