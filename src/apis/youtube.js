import axios from "axios";

const KEY = process.env.REACT_APP_AXIOS_KEY;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    type: "video",
    key: KEY,
  },
});
