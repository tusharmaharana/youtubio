import './VideoItem.css'
import React, { useContext } from "react";
import { SelectedVideoContext } from "../contexts/SelectedVideoContext";

export default function VideoItem({ video }) {
    var controlSelection = useContext(SelectedVideoContext);
  const onclick = () => {
    controlSelection.setSelectedVideo(video)
    };
  return (
    <li
      className="video-item list-group-item d-flex justify-content align-items-center"
      style={{ cursor: "pointer", paddingLeft:"0" }}
      onClick={(e) => onclick()}
    >
      <div className="image-parent">
        <img
          src={video.snippet.thumbnails.medium.url}
          className=""
          alt="..."
          style={{ maxWidth: "150px" }}
        />
      </div>
      <h6 className="item-name mb-0" style={{ padding: "15px" }}>
        <div>{video.snippet.title}</div>
        <div className="blockquote-footer">{video.snippet.channelTitle}</div>
      </h6>
    </li>
  );
}
