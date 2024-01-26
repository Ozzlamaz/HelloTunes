import axios from "axios";

const getToken = async () => {
  const response = await axios(process.env.TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        btoa(process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET),
    },
    data: "grant_type=client_credentials",
  });
  console.log(response.data);
  return response;
};

export default getToken;
