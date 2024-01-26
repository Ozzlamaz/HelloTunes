import axios from "axios";

const getCookie = async () => {
  try {
    await axios.get(import.meta.env.VITE_COOKIE_URL, {
      withCredentials: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export default getCookie;
