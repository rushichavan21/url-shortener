import {shortUrlserviceWithOutUser}from '../services/shortUrl.service.js';

export const shortUrlController = async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const shortUrl =await shortUrlserviceWithOutUser(url);
    res.status(200).json({shortUrl : process.env.APP_URL + shortUrl });
  } catch (error) {
    console.error('Error saving URL:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}