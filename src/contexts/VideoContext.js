import React, { createContext, useContext, useState } from "react";
import youtube from "../apis/youtube";

const VideoContext = createContext();

export const useVideo = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error("useVideo must be used within a VideoProvider");
  }
  return context;
};

export const VideoProvider = (props) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(undefined);

  const getVideos = async (query) => {
    const result = await youtube.get("/search", {
      params: {
        q: query,
      },
    });
    setVideos(result.data.items);
    setSelectedVideo(result.data.items[0]);
  };

  return (
    <VideoContext.Provider
      value={{
        videos,
        setVideos,
        selectedVideo,
        setSelectedVideo,
        actions: { getVideos },
      }}
      {...props}
    />
  );
};
