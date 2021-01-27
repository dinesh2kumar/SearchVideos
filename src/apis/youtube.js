import axios from "axios";

const KEY = "AIzaSyBLn7Ub1ysm-5zHH9tRy1X5YOgsYiFaAAs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
