
import { getAllUrlsDao } from "../dao/shortUrl.dao.js";


export const getAllController= async(req,res)=>{
  const userId = req.user?.userId;
  if (!userId) {
    return res.status(400).json({ message: "User ID not found in request." });
  }

  try {
    const urls = await getAllUrlsDao(userId);
    res.status(200).json({ urls });
  } catch (error) {
    console.error("Error fetching URLs:", error);
    res.status(500).json({ message: "Failed to retrieve URLs." });
  }
};