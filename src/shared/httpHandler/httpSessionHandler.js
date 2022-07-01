import axios from "axios";
import { refreshToken } from "../auth/tokenJWT";

const axiosSessionExtend = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

axiosSessionExtend.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${refreshToken()}`;
  return config;
});

export { axiosSessionExtend };
