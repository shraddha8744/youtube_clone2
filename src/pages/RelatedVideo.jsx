import React from "react";
import Time from "./Time";
import { useNavigate } from "react-router-dom";

const RelatedVideo = ({ videoData }) => {
  const navigate = useNavigate("");
  return (
    <div className="flex items-start mb-4 cursor-pointer hover:bg-gray-100 transition duration-200 p-1 rounded-lg">
      {/* Thumbnail */}

      <div className="w-[150px] h-[85px] flex-shrink-0 relative overflow-hidden rounded-lg">
        <img
          src={videoData?.thumbnails[1]?.url}
          alt="Video Thumbnail"
          className="w-full h-full object-cover"
          onClick={() => navigate(`/video/${videoData?.videoId}`)}
        />
        {videoData?.lengthSeconds && (
          <div className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white text-xs px-1 rounded">
            <Time time={videoData?.lengthSeconds} />
          </div>
        )}
      </div>

      {/* Video details */}
      <div className="ml-3 flex flex-col justify-between w-full">
        <h1 className="font-semibold text-sm line-clamp-2">
          {videoData?.title}
        </h1>
        <p className="text-gray-600 text-xs mt-1">{videoData?.author?.title}</p>
        <p className="text-gray-500 text-xs">
          {videoData?.stats?.views} views • {videoData?.publishedTimeText}
        </p>
      </div>
    </div>
  );
};

export default RelatedVideo;
