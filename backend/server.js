import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connecttoMongoDb from "./db/connecttoMongoDB.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auths", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connecttoMongoDb();
  console.log(`server in this port is connected ${PORT}`);
});
