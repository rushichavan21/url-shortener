import dotenv from "dotenv";
dotenv.config("./.env");
import { verifyToken } from "../utils/solver.js";

export const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Authorization token required" });
  }
  const token = authorization.split(' ')[1];
  console.log('Authorization header:', authorization);

  try {
    const decoded = await verifyToken(token);
    console.log('Decoded JWT:', decoded);
    req.user = decoded; 
    next();
  } catch (error) {
    console.error('JWT verification error:', error.message);
    return res.status(401).json({ error: "Request is not authorized" });
  }
};

// module.exports = {
//   authMiddleware,
// };
