import { saveCustomShortUrl, saveShortUrl } from "../dao/shortUrl.dao.js";
import { generateNanoId } from "../utils/solver.js";
import { redisClient } from "../cache/redisClient.js";
const CACHE_EXPIRY = 24 * 60 * 60 * 7;

export const shortUrlserviceWithOutUser =async(url)=>{
 const shortUrl = generateNanoId(7); 
 await redisClient.set(shortUrl, url, { EX: CACHE_EXPIRY });
 console.log("Redis isOpen:", redisClient.isOpen);
 await  saveShortUrl(shortUrl,url);
return shortUrl;
}

export const shortUrlserviceWithUser =async(url,user)=>{
 const shortUrl = generateNanoId(7); 
 await redisClient.set(shortUrl, url, { EX: CACHE_EXPIRY });
 await  saveShortUrl(shortUrl,url,user);
return shortUrl;
}

export const shortUrlserviceCustom =async(url,user,customId)=>{
 let shortUrl = await generateNanoId(0);
 shortUrl=shortUrl+customId; 
 await redisClient.set(shortUrl, url, { EX: CACHE_EXPIRY });
 await  saveCustomShortUrl(shortUrl,url,user);
return shortUrl;
}   