import axios from "axios";

const api = axios.create({
  baseURL: "https://kompasshr.com/Raymond_Email_API",
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;