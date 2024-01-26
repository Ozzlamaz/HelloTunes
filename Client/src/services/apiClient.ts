import axios from "axios";
import getCookie from "./getCookie";
import Cookies from "universal-cookie";
import { ParsedCookie } from "../interfaces/ParsedCookie";

const cookie = new Cookies();

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

apiClient.interceptors.request.use(
  async (req) => {
    if (!cookie.get("token")) {
      await getCookie();
      console.log(cookie.get("token"));
    }
    const parsedCookie: ParsedCookie = cookie.get("token");
    req.headers.Authorization = `${parsedCookie.token_type} ${parsedCookie.access_token}`;
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);
