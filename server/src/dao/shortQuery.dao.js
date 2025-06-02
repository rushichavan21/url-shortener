import url_Schema from "../models/url.model.js";
export const updateClicks=async (shortUrl) => {
const url = await url_Schema.findOne({ shortUrl });
     const orgUrl= url.originalUrl;
      url.clicks++;
      await url.save();
      return orgUrl;
}