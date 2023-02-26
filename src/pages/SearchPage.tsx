import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { searchTerm } = useParams();
  return <div>{searchTerm}</div>;
};

export default SearchPage;
