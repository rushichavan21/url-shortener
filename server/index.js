import express from "express";
import cors from "cors";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
dotenv.config("./.env");
import connectToMongo from "./src/config/mongo.config.js";
import url_Schema from "./src/models/url.model.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/api/generate-id", (req, res) => {
  const { url } = req.body;
  const urldata = new url_Schema({
    originalUrl: url,
    shortUrl: nanoid(7),
    clicks: 0,
  });

  urldata
    .save()
    .then(() => {
      res.status(201).json({ shortUrl: url_Schema.shortUrl });
    })
    .catch((error) => {
      console.error("Error saving URL:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.listen(3000, () => {
  connectToMongo();
  console.log("Connected to MongoDB");
  console.log("Server is running on http://localhost:3000");
});
