import { Track } from "../../interfaces/Track";
import Section from "../Section";

import RelatedAlbums from "./RelatedAlbums";
import TrackDetailsCard from "./TrackDetailsCard";

interface Props {
  track: Track;
  isLoading: boolean;
}

const TrackDetails = ({ track, isLoading }: Props) => {
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
export default TrackDetails;
