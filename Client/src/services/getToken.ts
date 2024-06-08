import axios from "axios";

const getToken = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_COOKIE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching token", error);
    throw error;
  }
};

export default getToken;
