import { Box, HStack, Heading, Stack, Text } from "@chakra-ui/react";

interface Props {
  children: any[];
  detail: string;
}

const DetailsHeading = ({ children, detail }: Props) => {
  return (
    <Heading marginY={5} as={"h3"} size={"md"}>
      <HStack alignItems={{ base: "flex-start", sm: "center" }}>
        <Box minWidth={"9rem"}>
          <Text padding={1} as={"span"}>
            {`${detail}: `}
          </Text>
        </Box>
        <Stack
          width={{ base: "100%", sm: "auto" }}
          flexDirection={{ base: "column", sm: "row" }}
          flexWrap={"wrap"}
        >
          {children.map((child, index) => (
            <Text
              key={child + index}
              textAlign={"center"}
              marginX={{ base: "auto", sm: "unset" }}
              as={"span"}
              borderRadius={5}
              backgroundColor={"whiteAlpha.500"}
              padding={1}
            >
              {child}
            </Text>
          ))}
        </Stack>
      </HStack>
    </Heading>
  );
};
export default DetailsHeading;
