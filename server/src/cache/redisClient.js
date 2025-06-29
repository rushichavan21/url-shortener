
import { createClient } from 'redis';

const redisClient = createClient({
  url: 'redis://localhost:6379',
});

const connectToRedis = async () => {
  try {
    if (!redisClient.isOpen) {
      await redisClient.connect();
      console.log('Redis connected successfully');
    }
  } catch (error) {
    console.error('Redis connection error:', error);
    process.exit(1);
  }
};

export { redisClient };
export default connectToRedis;
