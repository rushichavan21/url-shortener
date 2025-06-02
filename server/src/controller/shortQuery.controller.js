import url_Schema from "../models/url.model.js";
import { updateClicks } from "../dao/shortQuery.dao.js";
import { normalizeOriginalUrl } from "../utils/solver.js";

export const shortQueryController = async (req, res) => {
  try {
      const shortUrl = req.params.id;
      console.log("Short URL received:", shortUrl);
    let original= await updateClicks(shortUrl);
     original= normalizeOriginalUrl(original);
      res.redirect(original);
    } catch (error) {
      console.error("Error during redirection:", error);
      res.status(500).send("Server error");
    }
}