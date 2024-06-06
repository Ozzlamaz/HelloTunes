import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import getToken from "./services/getToken";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: "https://main--hellotunes.netlify.app", // change this to local host in dev env
  })
);
app.use(cookieParser());

app.get("/token", async (req: express.Request, res: express.Response) => {
  const response = await getToken();
  res.cookie("token", JSON.stringify(response.data), {
    maxAge: response.data.expires_in * 1000,
  });
  res.status(response.status).json({ message: "done" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
