import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/RapidApi";
import Sidebar from "../components/sidebar/Sidebar";
import SearchCard from "./SearchCard";
import Spinner from "../components/loading/Spinner";

const Search = () => {
  const [result, setResult] = useState([]);
  const { searchQuery } = useParams(); // Ensure this matches your route parameter

  const fetchSearchResult = async () => {
    if (!searchQuery) {
      console.error("Search query is not defined");
      return;
    }

    try {
      const response = await fetchData(`search/?q=${searchQuery}`);
      setResult(response.contents);
      console.log(response.contents);
    } catch (error) {
      console.error("Failed to fetch search results:", error);
    }
  };

  useEffect(() => {
    fetchSearchResult();
  }, [searchQuery]);

  return (
    <div className="pt-20">
      <div className="flex">
        <Sidebar />
        {/* Render the search results */}
        {result && result.length > 0 ? (
          <div>
            <div className="h-screen overflow-y-scroll hide-scroll-bar">
              {result?.map((item, i) => {
                if (item.type !== "video") return false;
                return <SearchCard key={i} video={item?.video} />;
              })}
            </div>
          </div>
        ) : (
          <div>
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
