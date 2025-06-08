import express from "express";
import cors from "cors";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
dotenv.config("./.env");
import connectToMongo from "./src/config/mongo.config.js";
import url_Schema from "./src/models/url.model.js";
import shortUrlRouter from "./src/routes/shortUrl.route.js";
import authRouter from "./src/routes/auth.route.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/generate-id",shortUrlRouter);
app.use("/",shortUrlRouter);
app.use("/auth",authRouter)

app.listen(3000, () => {
  connectToMongo();
  console.log("Connected to MongoDB");
  console.log("Server is running on http://localhost:3000");
});

