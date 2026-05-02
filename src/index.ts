import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./routes/index";
import connectDB from "./config/db";
dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use("/api", router);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
