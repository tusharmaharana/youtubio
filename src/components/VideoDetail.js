import React from "react";
import { useVideo } from "../contexts/VideoContext";

export default function VideoDetail() {
  const { selectedVideo } = useVideo();
  
  return !selectedVideo ? null : (
    <div className="video-detail col-9">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title="video-player"
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                  allowFullScreen
                  style={{paddingTop:".75rem"}}
        />
      </div>
      <div className="card" style={{ width: "100%" }}>
        <div className="card-body">
          <h5 className="card-title" style={{ marginBottom: "0" }}>
            {selectedVideo.snippet.title}
          </h5>
          <div
            className="blockquote-footer"
            style={{ marginBottom: "0.75rem" }}
          >
            {selectedVideo.snippet.channelTitle}
          </div>
          <p className="card-text">
            {selectedVideo.snippet.description}
          </p>
        </div>
      </div>
    </div>
  );
}
