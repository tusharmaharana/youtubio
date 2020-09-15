import React from "react";
import { useVideo } from "../contexts/VideoContext";
import './VideoItem.css';

export default function VideoItem({ video }) {
  const { setSelectedVideo } = useVideo();
  const { title,thumbnails} = video.snippet;
  
  const onClick = () => {
    setSelectedVideo(video)
  };
  return (
    <li
      className="video-item list-group-item d-flex justify-content align-items-center"
      style={{ cursor: "pointer", paddingLeft:"0" }}
      onClick={onClick}
    >
      <div className="image-parent">
        <img
          src={thumbnails.medium.url}
          className=""
          alt={video.snippet.title}
          style={{ maxWidth: "150px" }}
        />
      </div>
      <h6 className="item-name mb-0" style={{ padding: "15px" }}>
        <div>{title}</div>
        <div className="blockquote-footer">{video.snippet.channelTitle}</div>
      </h6>
    </li>
  );
}
