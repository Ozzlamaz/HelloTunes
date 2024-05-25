import { Skeleton } from "@chakra-ui/react";

interface Props {
  detailsCard?: boolean;
  list?: boolean;
  topResult?: boolean;
  carousel?: boolean;
}

const SkeletonCard = ({ list, topResult, detailsCard, carousel }: Props) => {
  return (
    <Skeleton
      borderRadius={5}
      height={
        list
          ? "4.5rem"
          : topResult
          ? "27.499rem"
          : detailsCard
          ? "22rem"
          : carousel
          ? "40rem"
          : "15.54rem"
      }
    />
  );
};
export default SkeletonCard;
