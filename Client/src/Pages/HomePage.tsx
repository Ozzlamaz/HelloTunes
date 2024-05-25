import NewAlbums from "../Components/Carousel/NewAlbums";
import useItems from "../hooks/useItems";
import Section from "../Components/Containers/Section";
import SubSection from "../Components/Containers/SubSection";

const HomePage = () => {
  const params = { q: "tag:new", type: "album" };
  const { data: newAlbums, isLoading } = useItems(params);

  return (
    <Section>
      <SubSection>
        <NewAlbums isLoading={isLoading} data={newAlbums} />
      </SubSection>
    </Section>
  );
};

export default HomePage;
