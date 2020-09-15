import React, { useContext } from "react";
import { SelectedVideoContext } from "../contexts/SelectedVideoContext";

export default function VideoDetail() {
  const controlSelection = useContext(SelectedVideoContext);
  if (!controlSelection.selectedVideo) return <div></div>;
  return (
    <div className="video-detail col-9">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title="video-player"
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${controlSelection.selectedVideo.id.videoId}`}
                  allowFullScreen
                  style={{paddingTop:".75rem"}}
        ></iframe>
      </div>
      <div className="card" style={{ width: "100%" }}>
        <div className="card-body">
          <h5 className="card-title" style={{ marginBottom: "0" }}>
            {controlSelection.selectedVideo.snippet.title}{" "}
          </h5>
          <div
            className="blockquote-footer"
            style={{ marginBottom: "0.75rem" }}
          >
            {controlSelection.selectedVideo.snippet.channelTitle}
          </div>
          <p className="card-text">
            {controlSelection.selectedVideo.snippet.description}
          </p>
        </div>
      </div>
    </div>
  );
}
