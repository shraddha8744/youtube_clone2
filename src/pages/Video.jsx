import React from "react";
import { Link } from "react-router-dom";
import Time from "./Time";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Video = ({ data }) => {
  return (
    <div className=" px-3">
      {/* Link to the video page */}
      <Link to={`/video/${data.videoId}`}>
        <div className="flex flex-col space-y-4">
          {/* Video Thumbnail */}
          <div className="relative overflow-hidden rounded-xl hover:rounded-none duration-200">
            <img
              src={data?.thumbnails[0]?.url}
              alt="Video Thumbnail"
              className="w-full h-48 md:h-56 object-cover"
            />
            {data?.lengthSeconds && <Time time={data?.lengthSeconds} />}
          </div>

          {/* Video Info */}
          <div className="flex space-x-4">
            {/* Channel Profile Image */}
            <div className="">
              {/* <img
                src={profile}
                alt="Channel Profile"
                className="h-10 w-20 md:h-16 md:w-16 rounded-full"
              /> */}
              <div className="border  h-14 w-14  flex justify-center items-center rounded-full">
                <img
                  src={data?.author?.avatar[0]?.url}
                  alt="Channel Profile"
                  className=" flex justify-center items-center rounded-full"
                />{" "}
              </div>
            </div>

            {/* Video Title and Info */}
            <div>
              <h2 className="text-sm font-bold line-clamp-2 hover:text-blue-600">
                {data?.title || "Video Title"}
              </h2>
              <div className="flex my-2">
                <p className="text-xs text-gray-500 font-semibold">
                  {data?.author?.title}
                </p>
                <p className="text-xs text-gray-500 pl-1 ">
                  {data?.stats?.views || "100"} views •{" "}
                  {data?.publishedTimeText || "1 day ago"}
                </p>
                <p>
                  {" "}
                  {data?.author?.badges[0]?.text === "Verified" && (
                    <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Video;
