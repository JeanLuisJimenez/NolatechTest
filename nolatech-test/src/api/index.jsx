import axios from "axios";
import { API_HOST } from "../utils/envvars";

const client = axios.create({
  baseURL: `${API_HOST}/api`,
  headers: { Accept: "application/json" },
});

client.interceptors.request.use((config) => {
  const token = localStorage.getItem("nolatechTest:accessToken");

  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default client;
