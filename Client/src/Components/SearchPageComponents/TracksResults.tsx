import { useParams } from "react-router-dom";
import { Track } from "../../interfaces/Track";
import ItemGrid from "../Containers/ItemGrid";
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
      <>
        <Heading2 isLoading={isLoading}>Albums</Heading2>
        <CustomErrorComp error={"No Albums Found"} />
      </>
    );
  return (
    <>
      <Heading2 isLoading={isLoading}>Tracks</Heading2>
      <ItemGrid isLoading={isLoading} items={tracks} list />
      <ShowMore disabled={isLoading} type="track" query={q!} />
    </>
  );
};
export default TracksResults;
