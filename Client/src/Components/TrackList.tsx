import { Heading, UnorderedList } from "@chakra-ui/react";
import useTracks from "../hooks/useTracks";
import useFilterQueryStore from "../filterquery/store";
import TrackListItem from "./TrackListItem";
import React from "react";

const TrackList = () => {
  const filterQuery = useFilterQueryStore((s) => s.filterQuery);
  const { data } = useTracks(filterQuery);
  return (
    <>
      <Heading marginBottom={3} as={"h1"}>
        Tracks
      </Heading>
      <UnorderedList>
        {data?.tracks.items.map((item) => (
          <React.Fragment key={item.id}>
            <TrackListItem item={item} />
          </React.Fragment>
        ))}
      </UnorderedList>
    </>
  );
};
export default TrackList;
