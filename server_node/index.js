import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config("./.env");
import connectToMongo from "./src/config/mongo.config.js";
import shortUrlRouter from "./src/routes/shortUrl.route.js";
import authRouter from "./src/routes/auth.route.js";
import getAllRouter from "./src/routes/getAll.route.js"
import connectToRedis from './src/cache/redisClient.js';
import rateLimiter from "./src/middleware/ratelimiter.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/health", (req, res) => {
  res.send("Healthy");
});
app.get("/", (req, res) => {
  const url= process.env.APP_URL;
  res.send(`
    <h1>Welcome to URL Shortener API</h1>
  ${url}
  `)
});

app.use("/api/generate-id",rateLimiter(10, 60),shortUrlRouter);
app.use("/",shortUrlRouter);
app.use("/auth",rateLimiter(10, 60),authRouter);
app.use("/api/",rateLimiter(10, 60),getAllRouter);
app.listen(process.env.PORT, () => {
  connectToMongo();
  connectToRedis();
  console.log("Connected to MongoDB");
  console.log("Server is running on http://localhost:3000");
});

