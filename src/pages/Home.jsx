import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Video from "../pages/Video";
import { useAuth } from "../context/Authprovider";
import ListItem from "./ListItem";
import Shimmer from "./Shimmer";
import Loader from "./Loader";

const Home = () => {
  const { data, loading } = useAuth();
  console.log(data);

  // Check loading state
  if (loading) {
    return (
      <div className="pt-24">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <div className="pt-24">
          <ListItem />
        </div>
        <div>
          {data.length === 0 ? (
            <Shimmer />
          ) : (
            <div className="overflow-x-auto overflow-y-scroll h-screen hide-scroll-bar">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
                {data.map((item, i) => {
                  if (item.type !== "video") return null;
                  return <Video data={item?.video} key={i} />;
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
