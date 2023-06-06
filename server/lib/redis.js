import RedisStore from "connect-redis"
import { createClient } from "redis"

let redisClient = await createClient()
    const connectToRedis = async () => {
        try {
            const connect = await redisClient.connect()
        } catch (error) {
            console.error(error);
        }
    }
    connectToRedis();
let redisStore = new RedisStore({
    client: redisClient,
    prefix: "myapp:",
  })

export { redisStore };