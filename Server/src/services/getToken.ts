import axios from "axios";

export interface FetchResponse {
  access_token?: string;
  token_type?: string;
  expires_in?: 3600;
  error?: string;
  error_description?: string;
}

const getToken = async () => {
  const response = await axios<FetchResponse>(process.env.TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        btoa(process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET),
    },
    data: "grant_type=client_credentials",
  });
  return response;
};

export default getToken;
