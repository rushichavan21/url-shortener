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
