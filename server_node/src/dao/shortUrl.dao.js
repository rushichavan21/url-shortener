import url_Schema from "../models/url.model.js";
export const saveShortUrl = async (shortUrl,orgUrl,userId) => {
   const newUrl = new url_Schema({
      originalUrl: orgUrl,
      shortUrl: shortUrl,
      clicks: 0,
})
if(userId){
    newUrl.user = userId;
}
newUrl.save();
}

export const saveCustomShortUrl = async (shortUrl, orgUrl, userId) => {
  const existing = await url_Schema.findOne({ shortUrl });
  if (existing) {
    throw new Error("Custom short URL already exists. Please choose another one.");
  }
  const newUrl = new url_Schema({
    originalUrl: orgUrl,
    shortUrl: shortUrl,
    clicks: 0,
    user: userId || null,
  });

  await newUrl.save();
  return newUrl;
};

export const getAllUrlsDao = async (userId) => {
  return await url_Schema.find({ user: userId });
};


