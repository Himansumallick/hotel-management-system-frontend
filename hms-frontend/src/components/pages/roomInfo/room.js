import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api";

export const allRooms = (options) => {
  return axios
    .get("/rooms", { params: options })
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};
