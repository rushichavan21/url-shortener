import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config("./.env");
import connectToMongo from "./src/config/mongo.config.js";
import shortUrlRouter from "./src/routes/shortUrl.route.js";
import authRouter from "./src/routes/auth.route.js";
import getAllRouter from "./src/routes/getAll.route.js"
import connectToRedis from './src/cache/redisClient.js';


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/generate-id",shortUrlRouter);
app.use("/",shortUrlRouter);
app.use("/auth",authRouter);
app.use("/api/",getAllRouter);
app.listen(process.env.PORT, () => {
  connectToMongo();
  connectToRedis();
  console.log("Connected to MongoDB");
  console.log("Server is running on http://localhost:3000");
});

