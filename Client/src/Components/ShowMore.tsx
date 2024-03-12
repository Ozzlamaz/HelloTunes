import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props {
  type?: string;
  query: string;
  disabled: boolean;
}

const ShowMore = ({ type, query, disabled }: Props) => {
  const navigate = useNavigate();
  return (
    <Button
      isDisabled={disabled}
      marginTop={5}
      float={"right"}
      onClick={() => {
        navigate(`/search/${type}/${query}`);
      }}
    >
      {`Show more ${type ? type + "s" : ""}`}
    </Button>
  );
};
export default ShowMore;
