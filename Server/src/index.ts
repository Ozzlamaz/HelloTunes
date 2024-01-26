import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import getToken from "./services/getToken";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
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
