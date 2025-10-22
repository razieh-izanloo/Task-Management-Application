import { Dispatch, SetStateAction } from "react";

export const SearchBar = (props: {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}) => {
  const { search, setSearch } = props;

  return (
    <>
      <input
        type="text"
        placeholder="Search by title or description..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "5px", width: "250px", marginRight: "10px" }}
      />
    </>
  );
};
