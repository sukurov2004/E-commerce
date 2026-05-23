import { useGlobalContext } from "../context/globalProvider";

export const useSearch = () => {
  const { searchInput, setSearchInput, search, setSearch, sort, setSort } =
    useGlobalContext();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchInput);
  };

  const resetFilters = () => {
    setSearch("");
    setSort("");
    setSearchInput("");
  };

  return {
    searchInput,
    setSearchInput,
    search,
    sort,
    setSort,
    handleSearch,
    resetFilters,
  };
};