import { useParams } from "react-router-dom";
import Section from "../Components/Containers/Section";
import RelatedTracks from "../Components/Details/RelatedTracks";
import TrackDetailsCard from "../Components/Details/TrackDetailsCard";
import useItemDetails from "../hooks/useItemDetails";
import { Track } from "../interfaces/Track";
import SubSection from "../Components/Containers/SubSection";

const TrackDetailsPage = () => {
  const { id } = useParams();
  const { data: track, isLoading } = useItemDetails<Track>("tracks", id!);
  return (
    <>
      <Section>
        <TrackDetailsCard isLoading={isLoading} track={track} />
      </Section>
      <Section maxW="6xl">
        <SubSection>
          <RelatedTracks track={track} isLoading={isLoading} />
        </SubSection>
      </Section>
    </>
  );
};
export default TrackDetailsPage;
