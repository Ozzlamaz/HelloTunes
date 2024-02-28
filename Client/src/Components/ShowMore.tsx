import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props {
  type: string;
  query: string;
}

const ShowMore = ({ type, query }: Props) => {
  const navigate = useNavigate();
  return (
    <Button
      marginTop={5}
      float={"right"}
      onClick={() => {
        navigate(`/search/${type}/${query}`);
      }}
    >
      ShowMore
    </Button>
  );
};
export default ShowMore;
