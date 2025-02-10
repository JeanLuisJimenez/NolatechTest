import axios from "axios";
import {API_HOST} from "../utils/envvars";

const client = axios.create({
    baseURL: `${API_HOST}/api`,
    headers: {Accept: "application/json"},
});

client.interceptors.request.use((config) => {
    const token = localStorage.getItem("nolatest:auth");

    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
});

client.interceptors.response.use((response) => {
    if (response.status < 400)
        return response.data;

    return response;
})

export default client;
