import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ getVideos }) {
  const [input, setInput] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    getVideos(input);
  };
  return (
    <>
      <form className="search" onSubmit={onFormSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="input-group-append">
            <button className="input-group-text" type="submit">
              <i className="fas fa-search" style={{ margin: "0 15px" }}></i>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
