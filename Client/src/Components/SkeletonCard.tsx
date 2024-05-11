import { Skeleton } from "@chakra-ui/react";

interface Props {
  details?: boolean;
  tracks?: boolean;
  topResult?: boolean;
}

const SkeletonCard = ({ tracks, topResult, details }: Props) => {
  return (
    <Skeleton
      borderRadius={5}
      height={
        tracks
          ? "4.5rem"
          : topResult
          ? "27.499rem"
          : details
          ? "20rem"
          : "15.54rem"
      }
    />
  );
};
export default SkeletonCard;
