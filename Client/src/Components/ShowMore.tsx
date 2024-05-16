import { Button, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props {
  type?: string;
  query: string;
  disabled: boolean;
}

const ShowMore = ({ type, query, disabled }: Props) => {
  const navigate = useNavigate();
  return (
    <HStack justifyContent={"end"} marginTop={5}>
      <Button
        isDisabled={disabled}
        onClick={() => {
          navigate(`/search/${type}/${query}`);
        }}
      >
        {`Show more ${type ? type + "s" : ""}`}
      </Button>
    </HStack>
  );
};
export default ShowMore;
