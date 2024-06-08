import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import getToken from "./getToken";
import Cookies from "universal-cookie";
import { ParsedCookie } from "../interfaces/ParsedCookie";

const cookie = new Cookies();

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

apiClient.interceptors.request.use(
  async (req: InternalAxiosRequestConfig) => {
    if (!cookie.get("token")) {
      const newToken: ParsedCookie = await getToken();
      cookie.set("token", newToken, { maxAge: newToken.expires_in });
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
