import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";
import { NavLink, To } from "react-router-dom";

interface Props {
  to: To;
  children: ReactNode;
  active: Boolean;
}

const TypeButton = ({ to, children, active }: Props) => {
  return (
    <Button
      backgroundColor={active ? "gray.500" : "blackAlpha.300"}
      flexGrow={1}
      to={to}
      as={NavLink}
    >
      {children}
    </Button>
  );
};
export default TypeButton;
