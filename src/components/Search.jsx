import { useContext } from "react";
import EcomContext from "../context/EcomContext";
import SearchResults from "./SearchResults";

function Search() {
  const { handleSearch, searchQuery } = useContext(EcomContext);

  return (
    <div className="text-center space-x-2">
      <input
        type="search"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search for restaurants, menu, etc."
        className="text-[17px] h-[50px] w-[395px] px-[16px] rounded-[9px] outline-1 outline outline-orange-50"/>
      <button className="bg-orange-600 hover:bg-orange-500 transition duration-200 text-white py-[10px] px-[16px] rounded-lg text-lg">
        Search
      </button>

      <div>
        <SearchResults />
      </div>
    </div>
  );
}

export default Search;
