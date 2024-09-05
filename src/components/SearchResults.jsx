import { useContext } from "react";
import EcomContext from "../context/EcomContext";

function SearchResults() {
  const { filteredResults, searchQuery } = useContext(EcomContext);

  if (!searchQuery.trim()) {
    return null;
  }

  if (!filteredResults.length) {
    return (
      <p className="bg-white mt-2 rounded-md max-h-[140px] mr-[485px] m-auto w-full max-w-[395px] p-4 text-center text-[18px]">
        No results found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 mr-[485px] mt-2 rounded-md m-auto bg-white max-h-[120px] p-4 gap-4 w-full max-w-[395px] overflow-y-auto">
      {searchQuery.trim() !== "" &&
        filteredResults.map((item) => (
          <div key={item.id} className="flex flex-col">
            {item.name ? (
              <p className="font-medium text-black">Menu: {item.name}</p>
            ) : (
              <p className="font-medium text-black">Restaurant: {item.restaurant}</p>
            )}
          </div>
        ))}
    </div>
  );
}

export default SearchResults;
