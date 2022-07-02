import axios from "axios";
import history from "../utils/history";

export const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const requestInterceptor = apiInstance.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem("access_token");
    if (!access_token) {
      history.replace("/login");
    }
    config.headers["x-auth-token"] = JSON.parse(access_token);
    return config;
  },
  (err) => Promise.reject(err),
);

export const responseInterceptor = apiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.status === 401) {
        localStorage.clear();
        history.replace("/login");
      }
    }
    return Promise.reject(error);
  },
);
