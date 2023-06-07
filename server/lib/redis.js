import RedisStore from "connect-redis"
import { createClient } from "redis"

let redisClient = await createClient()
    const connectToRedis = async () => {
        try {
            const connect = await redisClient.connect()
            if(connect) {
                console.log('Connected to Redis...')
            }
            else {
                console.log(`Couldn't connect to Redis..`)
            }
        } catch (error) {
            console.error(error);
        }
    }
    await connectToRedis();
let redisStore = new RedisStore({
    client: redisClient,
    prefix: "myapp:",
  })

export { redisStore };