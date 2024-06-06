import { useParams } from "react-router-dom";
import { Track } from "../../interfaces/Track";
import ItemGrid from "../Containers/ItemGrid";
import ScrollContainer from "../Containers/ScrollContainer";
import SubSection from "../Containers/SubSection";
import Heading2 from "../Headings/Heading2";
import ShowMore from "../ShowMore";
import CustomErrorComp from "../Error/CustomErrorComp";

interface Props {
  tracks?: Track[];
  isLoading: boolean;
}

const TracksResults = ({ tracks, isLoading }: Props) => {
  const { q } = useParams();
  if (tracks?.length === 0)
    // response has empty items array
    return (
      <SubSection>
        <Heading2 isLoading={isLoading}>Albums</Heading2>
        <CustomErrorComp error={"No Albums Found"} />
      </SubSection>
    );
  return (
    <SubSection>
      <Heading2 paddingX={5} isLoading={isLoading}>
        Tracks
      </Heading2>
      <ScrollContainer id="scroll-container" maxHeight="27.45rem">
        <ItemGrid isLoading={isLoading} items={tracks} list />
      </ScrollContainer>
      <ShowMore disabled={isLoading} type="track" query={q!} />
    </SubSection>
  );
};
export default TracksResults;
