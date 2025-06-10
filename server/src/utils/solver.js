import { nanoid } from 'nanoid';
import jwt from 'jsonwebtoken';


export const generateNanoId = (length) => {
return nanoid(length);
}

export const normalizeOriginalUrl = (url) => {
  if (!url) return "";

  if (/^https?:\/\//i.test(url)) {
    return url;
  }


  if (/^www\./i.test(url)) {
    return "http://" + url;
  }

  return "http://" + url;
};


export const signToken = async (userId) => {
  const payload = {
    userId,
  };

  return await jwt.sign(payload, process.env.JWT_SECRET,  { expiresIn: '3d' } );
} 

export const verifyToken = async (token) => {
  try {
    const decoded=await jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    console.error('Error verifying token:', error);
    throw new Error('Invalid token');
  }
}