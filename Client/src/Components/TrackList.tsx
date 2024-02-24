import { Heading, UnorderedList } from "@chakra-ui/react";
import TrackListItem from "./TrackListItem";
import React from "react";
import { ResponseData } from "../interfaces/ResponseData";

interface Props {
  data?: ResponseData;
}

const TrackList = ({ data }: Props) => {
  return (
    <>
      <Heading marginBottom={3} as={"h1"}>
        Tracks
      </Heading>
      <UnorderedList>
        {data?.tracks?.items.map((item) => (
          <React.Fragment key={item.id}>
            <TrackListItem item={item} />
          </React.Fragment>
        ))}
      </UnorderedList>
    </>
  );
};
export default TrackList;
