import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

const redisUrl = new URL(process.env.UPSTASH_REDIS_URL);

const redis = new Redis({
  host: redisUrl.hostname,
  port: redisUrl.port,
  username: redisUrl.username,
  password: redisUrl.password,
  tls: {}, // 👈 this is what makes Upstash work!
});

redis.on("connect", () => {
  console.log("✅ Redis connected");
});

redis.on("error", (err) => {
  console.error("❌ Redis error:", err);
});

redis.on("close", () => {
  console.log("🔌 Redis connection closed");
});

export default redis;
