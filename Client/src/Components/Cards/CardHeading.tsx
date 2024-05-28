import { As, Heading, ResponsiveValue, Tooltip } from "@chakra-ui/react";

interface Props {
  children: string;
  as: As;
  color?: string;
  size?: string;
  textAlign?: ResponsiveValue<any>;
}

const CardHeading = ({ children, as, color, size, textAlign }: Props) => {
  return (
    <Tooltip label={children}>
      <Heading
        textOverflow={"ellipsis"}
        overflow={"hidden"}
        whiteSpace={"nowrap"}
        size={size}
        as={as}
        color={color}
        textAlign={textAlign}
      >
        {children}
      </Heading>
    </Tooltip>
  );
};
export default CardHeading;
