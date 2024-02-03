import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import getCookie from "./getCookie";
import Cookies from "universal-cookie";
import { ParsedCookie } from "../interfaces/ParsedCookie";

const cookie = new Cookies();

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

apiClient.interceptors.request.use(
  async (req: InternalAxiosRequestConfig) => {
    if (!cookie.get("token")) {
      await getCookie();
    }
    const parsedCookie: ParsedCookie = cookie.get("token");
    req.headers.Authorization = `${parsedCookie.token_type} ${parsedCookie.access_token}`;
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const getData = async (
  endpoint: string,
  requestConfig?: AxiosRequestConfig
) => {
  return apiClient.get(endpoint, requestConfig).then((res) => res.data);
};

export default getData;
