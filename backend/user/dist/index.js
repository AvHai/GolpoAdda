import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import { createClient } from 'redis';
import userRoutes from './routes/user.js';
import { connectRabbitMq } from './config/rabbitmq.js';
import cors from 'cors';
dotenv.config();
connectDb();
connectRabbitMq();
if (!process.env.REDIS_URL) {
    throw new Error("REDIS_URL environment variable is not set");
}
export const redisClient = createClient({
    url: process.env.REDIS_URL,
});
redisClient
    .connect()
    .then(() => console.log("Connected to Redis"))
    .catch(console.error);
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use("/api/v1", userRoutes);
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
//# sourceMappingURL=index.js.map