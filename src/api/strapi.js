import axios from "axios";

const api = axios.create({
  baseURL: "http://54.210.163.0/",
});

export default api;
