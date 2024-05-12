import { useParams } from "react-router-dom";
import Section from "../Components/Section";
import RelatedAlbums from "../Components/Details/RelatedAlbums";
import TrackDetailsCard from "../Components/Details/TrackDetailsCard";
import useItemDetails from "../hooks/useItemDetails";
import { Track } from "../interfaces/Track";

const TrackDetailsPage = () => {
  const { id } = useParams();
  const { data: track, isLoading } = useItemDetails<Track>("tracks", id!);
  return (
    <>
      <Section>
        <TrackDetailsCard isLoading={isLoading} track={track} />
      </Section>
      {/* <Section maxW="6xl">
        <Section>
          <RelatedAlbums artist={artist} isLoading={isLoading} />
        </Section>
      </Section> */}
    </>
  );
};
export default TrackDetailsPage;
