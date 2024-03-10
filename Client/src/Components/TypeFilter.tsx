import { HStack } from "@chakra-ui/react";
import TypeButton from "./TypeButton";
import { useParams } from "react-router-dom";

const TypeFilter = () => {
  const itemTypes = ["all", "artist", "album", "track"];
  const { q, type } = useParams();

  return (
    <HStack>
      {itemTypes.map((itemType, index) => (
        <TypeButton
          active={type === itemType || (itemType === "all" && !type)}
          key={index}
          to={itemType === "all" ? `search/${q}` : `search/${itemType}/${q}`}
        >
          {itemType[0].toUpperCase() + itemType.slice(1)}
        </TypeButton>
      ))}
    </HStack>
  );
};
export default TypeFilter;
