import url_Schema from "../models/url.model.js";
import { getUrlfromDb,updateClicks } from "../dao/shortQuery.dao.js";
import { normalizeOriginalUrl } from "../utils/solver.js";
import { redisClient } from "../cache/redisClient.js";
import url_Schema from "../models/url.model.js";
import { getUrlfromDb, updateClicks } from "../dao/shortQuery.dao.js";
import { normalizeOriginalUrl } from "../utils/solver.js";
import { redisClient } from "../cache/redisClient.js";

export const shortQueryController = async (req, res) => {
  try {
    const shortUrl = req.params.id;
    console.log("Short URL received:", shortUrl);
    let original = await redisClient.get(shortUrl);
    if (!original) {
      console.log("Cache miss for short URL:", shortUrl);
      original = await getUrlfromDb(shortUrl);
      if (!original) return res.status(404).send("Short URL not found");
      await redisClient.set(shortUrl, original, { EX: 3600 });
    }
    updateClicks(shortUrl).catch(console.error);
    original = normalizeOriginalUrl(original);
    res.redirect(original);
    
  } catch (error) {
    console.error("Error during redirection:", error);
    res.status(500).send("Server error");
  }
};
