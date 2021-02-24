import axios from "axios";

const api = axios.create({
  baseURL: "https://strapimanagedcontent.herokuapp.com/",
});

export default api;
