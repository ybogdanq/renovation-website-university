import axios from "axios";

const $api = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5212",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default $api;
