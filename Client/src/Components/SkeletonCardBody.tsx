import { Box, Skeleton } from "@chakra-ui/react";

interface Props {
  tracks?: boolean;
  topResult?: boolean;
}

const SkeletonCardBody = ({ tracks, topResult }: Props) => {
  return (
    <Box>
      <Skeleton borderRadius={5} height={tracks ? 50 : topResult ? 500 : 275} />
    </Box>
  );
};
export default SkeletonCardBody;
