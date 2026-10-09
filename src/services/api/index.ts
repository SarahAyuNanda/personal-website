import axios, { AxiosError } from "axios";

/* use proxy to avoid CORS issues */
const baseURL = "/api";

export const api = axios.create({
  baseURL,
  withCredentials: false,
});

api.interceptors.request.use(
  async (config) => {
    if (config.headers) {
      config.headers["Accept"] = "application/json";
    }

    /* pass the endpoint path to proxy (proxy will construct full URL) */
    if (config.url) {
      /* remove leading slash if present, proxy will handle path construction */
      config.url = config.url.startsWith("/")
        ? config.url.slice(1)
        : config.url;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      window.location.replace("/");
    }
    return Promise.reject(error);
  },
);
