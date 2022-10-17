import axios from "axios";

axios.defaults.baseURL = "http://localhost:9000/api";

export const fetchAllRooms = (options) => {
  return axios.get("/rooms", { params: options }).then((res) => {
    return res.data.data;
  });
};
