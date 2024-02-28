import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate, useParams } from "react-router-dom";
import useFilterQueryStore from "../filterquery/store";
import useInfiniteItems from "../hooks/useInfiniteItems";
import { useEffect } from "react";
import ItemGrid from "../Components/ItemGrid";

const InfiniteSeachPage = () => {
  const filterQuery = useFilterQueryStore((s) => s.filterQuery);
  const setType = useFilterQueryStore((s) => s.setType);
  const setLimit = useFilterQueryStore((s) => s.setLimit);

  const { type, query } = useParams();
  const navigate = useNavigate();

  const { data } = useInfiniteItems(filterQuery);

  useEffect(() => {
    setLimit(20);
    setType(type!);
  }, []);

  return null;
};
export default InfiniteSeachPage;
