import { redisClient } from "../cache/redisClient.js";

const rateLimiter = (limit, windowSeconds) => {
  return async (req, res, next) => {


    if (req.method === "OPTIONS") {
      return next();
    }

    const ip = req.ip;
    const key = `rl:${ip}`;

    try {
      const current = await redisClient.get(key);

      if (current && parseInt(current) >= limit) {
        return res
          .status(429)
          .json({ message: "Too many requests. Try again later." });
      }

      if (current) {
        await redisClient.incr(key);
      } else {
        await redisClient.set(key, 1, {
          EX: windowSeconds,
          NX: true,
        });
      }

      next();
    } catch (err) {
      console.error("Rate limiter error:", err);
      res.status(500).json({
        message: "Internal Server Error (Rate Limiter)",
      });
    }
  };
};

export default rateLimiter;
