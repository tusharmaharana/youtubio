import React from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

export default function App() {
  return (
    <div className="container">
      <SearchBar />
      <div className="row">
        <VideoDetail />
        <VideoList />
      </div>
    </div>
  );
}
