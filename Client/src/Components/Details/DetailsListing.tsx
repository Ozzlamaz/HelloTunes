import { Box, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Detail from "./Detail";

interface Props {
  heading: string;
  detail?: string | number;
  detailArr?: string[];
  detailWithLinks?: { name: string; id: string; type: string }[];
}

const DetailsListing = ({
  heading,
  detail,
  detailArr,
  detailWithLinks,
}: Props) => {
  return (
    <Heading marginY={3} as={"h3"} size={"md"}>
      <HStack alignItems="flex-start">
        <Box paddingY={0.5} minWidth={"9rem"}>
          <Text as={"span"}>{`${heading}: `}</Text>
        </Box>
        <Stack
          width={{ base: "100%", sm: "auto" }}
          flexDirection={{ base: "column", sm: "row" }}
          flexWrap={"wrap"}
        >
          {detail && <Detail>{detail}</Detail>}
          {detailArr &&
            detailArr.map((detail, index) => (
              <Detail key={detail + index}>{detail}</Detail>
            ))}
          {detailWithLinks &&
            detailWithLinks.map((detail) => (
              <Link key={detail.id} to={`/details/${detail.type}/${detail.id}`}>
                <Detail>{detail.name}</Detail>
              </Link>
            ))}
        </Stack>
      </HStack>
    </Heading>
  );
};
export default DetailsListing;
