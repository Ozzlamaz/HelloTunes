import axios from "axios";
import { TokenResponse } from "../interfaces/TokenResponse";

const getToken = async () => {
  try {
    const response = await axios.get<TokenResponse>(
      import.meta.env.VITE_SERVER_TOKEN
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getToken;
