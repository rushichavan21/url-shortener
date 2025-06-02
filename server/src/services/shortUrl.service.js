import { saveShortUrl } from "../dao/shortUrl.dao.js";
import { generateNanoId } from "../utils/solver.js";


export const shortUrlserviceWithOutUser =async(url)=>{
 const shortUrl = generateNanoId(7); 
 await  saveShortUrl(shortUrl,url);
return shortUrl;
}

export const shortUrlserviceWithUser =async(url,user)=>{
 const shortUrl = generateNanoId(7); 
 await  saveShortUrl(shortUrl,url,user);
return shortUrl;
}