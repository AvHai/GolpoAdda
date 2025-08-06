import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import chatRoutes from './routes/chat.js';
dotenv.config();
connectDb();
const app = express();
const port = process.env.PORT;
app.use("/api/v1", chatRoutes);
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
//# sourceMappingURL=index.js.map