import { Button } from "@chakra-ui/react";
import useFilterQueryStore from "../filterquery/store";

const TypeFilter = () => {
  const setType = useFilterQueryStore((s) => s.setType);
  const types = ["album", "artist", "track"];
  return (
    <>
      {types.map((type) => {
        return (
          <Button key={type} onClick={() => setType(type)} value={type}>
            {type}
          </Button>
        );
      })}
    </>
  );
};
export default TypeFilter;
