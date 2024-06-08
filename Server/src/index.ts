import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import getToken from "./services/getToken";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.APP_URL,
  })
);

app.get("/token", async (req: express.Request, res: express.Response) => {
  const response = await getToken();
  res.status(200).send(response.data);
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
