import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import { VideoContext } from "../contexts/VideoContext";
import { SelectedVideoContext } from "../contexts/SelectedVideoContext";

export default function App() {
  const controlVideo = useContext(VideoContext);
  const controlSelection = useContext(SelectedVideoContext);

  const getVideos = async (query) => {
    const result = await youtube.get("/search", {
      params: {
        q: query,
      },
    });
    controlVideo.setVideos(result.data.items);
    controlSelection.setSelectedVideo(result.data.items[0]);
  };
  return (
    <div className="container">
      <SearchBar getVideos={(e) => getVideos(e)} />
      <div className="row">
        <VideoDetail />
        <VideoList />
      </div>
    </div>
  );
}
