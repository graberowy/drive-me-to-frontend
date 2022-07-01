import axios from "axios";
import { accessToken } from "../auth/tokenJWT"

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${accessToken()}`;
  return config;
});

export { axiosInstance };