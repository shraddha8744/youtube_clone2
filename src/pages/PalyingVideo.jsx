import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/RapidApi";
import ReactPlayer from "react-player";
import {
  BsFillCheckCircleFill,
  BsHandThumbsUp,
  BsHandThumbsDown,
  BsThreeDotsVertical,
} from "react-icons/bs";
import {
  AiOutlineDownload,
  AiOutlineGift,
  AiOutlineScissor,
} from "react-icons/ai";
import RelatedVideo from "./RelatedVideo";
import Spinner from "../components/loading/Spinner";

const PlayingVideo = () => {
  const { id } = useParams();

  const [video, setVideo] = useState(null);
  const [relatedVideo, setRealtedVideo] = useState([]);
  const [desceription, setDescription] = useState(false);

  const fetchVideoDetails = async () => {
    try {
      const response = await fetchData(`video/details?id=${id}`);
      setVideo(response);
    } catch (error) {
      console.error("Failed to fetch video details:", error);
    }
  };

  const fetchRelatedVideo = async () => {
    try {
      const response = await fetchData(`video/related-contents/?id=${id}`);
      setRealtedVideo(response.contents);
      console.log(response.contents);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideo();
  }, [id]);

  return (
    <div className="pt-20 flex justify-center h-[calc(100%-56px)] mb-4">
      {video ? (
        <div className="w-full max-w-[1500px] flex flex-col lg:flex-row px-4 py-6">
          <div className="relative w-full max-w-[900px] aspect-w-16 aspect-h-9 h-[500px] rounded-lg">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              width="100%"
              height="100%"
              controls
              style={{ backgroundColor: "#000000" }}
              playing={false}
            />
            <div>
              <p className="my-2 text-[18px] font-bold">
                {video.title}{" "}
                <span
                  className="text-blue-500"
                  onClick={() => setDescription(!desceription)}
                >
                  more
                </span>
              </p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-3">
                  <img
                    src={video.author?.avatar[0].url}
                    alt="channel-logo"
                    className="h-14 w-14 rounded-full"
                  />
                  <div>
                    <h1 className="flex items-center space-x-3 font-bold text-sm">
                      {video.author?.title}
                      {video?.author?.isVerified && (
                        <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[14px]" />
                      )}
                    </h1>
                    <p className="text-gray-500">
                      {video.author?.stats?.subscribersText} Subscribers
                    </p>
                  </div>
                  <div>
                    <button className="ml-3 px-5 py-2 mt-2 text-center bg-red-500 font-semibold rounded-r-full rounded-l-full hover:bg-red-600 text-white flex items-center">
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-1  bg-gray-100  p-1 rounded-lg font-bold text-sm px-2">
                    <BsHandThumbsUp size={22} />
                    <span>Like</span>
                  </button>
                  <button className="flex items-center space-x-1  bg-gray-100 p-1 rounded-lg font-bold text-sm px-2">
                    <BsHandThumbsDown size={22} />
                    <span>Dislike</span>
                  </button>
                  {/* <button className="flex items-center space-x-1  bg-gray-100  p-1 rounded-lg font-bold text-sm px-2">
                    <AiOutlineDownload size={22} />
                    <span>Download</span>
                  </button>
                  <button className="flex items-center space-x-1 bg-gray-100  p-1 rounded-lg font-bold text-sm px-2">
                    <AiOutlineGift size={22} />
                    <span>Thanks</span>
                  </button>
                  <button className="flex items-center space-x-1 bg-gray-100  p-1 rounded-lg font-bold text-sm px-2">
                    <AiOutlineScissor size={22} />
                    <span>Clip</span>
                  </button> */}
                  <button className="flex items-center bg-gray-100  rounded-lg">
                    <BsThreeDotsVertical size={22} />
                  </button>
                </div>
              </div>
            </div>
            {/* video description */}
            {desceription && (
              <div className="p-4 bg-gray-100 rounded-xl mt-4 text-xl">
                {video?.description}
              </div>
            )}
          </div>

          {/* Placeholder for related videos */}
          <div className="mt-6 lg:mt-0 lg:ml-6 shadow-xl h-screen overflow-y-scroll">
            {relatedVideo.map((e, i) => {
              if (e.type !== "video") return null;
              return <RelatedVideo videoData={e.video} key={i} />;
            })}
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center my-44">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default PlayingVideo;
