import axios from "axios";
import { storage } from "../../helpers/storage";
import { useUserStore } from "../../store/UserStore";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const instance = axios.create({
  baseURL,
});

// modificare l'header delle richieste
instance.interceptors.request.use(
  function (config) {
    const accessToken = storage.get("token");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => response,
  function (error) {
    if (error.response.status === 401) {
      const { logout } = useUserStore();
      logout();
    }
    return Promise.reject(error);
  }
);

export default instance;
