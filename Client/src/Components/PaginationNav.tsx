import { Button, HStack } from "@chakra-ui/react";

interface Props {
  pageCount: number;
  currentPage: number;
  setCurrenPage: React.Dispatch<React.SetStateAction<number>>;
}

const PaginationNav = ({ pageCount, currentPage, setCurrenPage }: Props) => {
  const NavButtonsArray = Array.from({
    length: pageCount,
  }).map((_, index) => index + 1);

  const displayedNavButtons = NavButtonsArray.filter((nb) => {
    if (currentPage === 1 || currentPage === 2) return nb < 6;
    if (currentPage === pageCount || currentPage === pageCount - 1)
      return nb > pageCount - 5;
    return nb > currentPage - 3 && nb < currentPage + 3;
  });

  return (
    <HStack justifyContent={"center"}>
      {displayedNavButtons[0] !== 1 && (
        <Button onClick={() => setCurrenPage(displayedNavButtons[0] - 1)}>
          ...
        </Button>
      )}
      {displayedNavButtons.map((nb) => {
        return (
          <>
            <Button
              backgroundColor={currentPage === nb ? "blue" : "whiteAplha.300"}
              _hover={{
                backgroundColor:
                  currentPage === nb ? "blue.600" : "whiteAlpha.300",
              }}
              onClick={() => setCurrenPage(nb)}
              value={nb}
              key={nb}
            >
              {nb}
            </Button>
          </>
        );
      })}
      {displayedNavButtons[displayedNavButtons.length - 1] !== pageCount && (
        <Button
          onClick={() =>
            setCurrenPage(
              displayedNavButtons[displayedNavButtons.length - 1] + 1
            )
          }
        >
          ...
        </Button>
      )}
    </HStack>
  );
};
export default PaginationNav;
