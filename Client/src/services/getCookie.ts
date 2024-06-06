import axios from "axios";
let counter: number;

const getCookie = async () => {
  clearTimeout(counter);
  counter = setTimeout(() => {
    axios.get(import.meta.env.VITE_COOKIE_URL);
  }, 100);
};

export default getCookie;
