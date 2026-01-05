import url_Schema from "../models/url.model.js";
export const getUrlfromDb=async (shortUrl) => {
const url = await url_Schema.findOne({ shortUrl });
     const orgUrl= url.originalUrl;
      return orgUrl;
}
export const updateClicks=async (shortUrl) => {
const url = await url_Schema.findOne({ shortUrl });
      url.clicks++;
      await url.save();
}
