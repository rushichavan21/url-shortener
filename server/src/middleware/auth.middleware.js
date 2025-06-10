import { findUserById } from "../dao/user.dao";
import { verifyToken } from "../utils/solver";

export const authMiddleware = (req, res, next) => {
  const tokern=req.cookies.token; 
    if (!tokern) {  
    return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const decoded = verifyToken(tokern);
        const user=findUserById(decoded.userId);
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}