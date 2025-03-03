import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import fileRoutes from "./routes/file.router.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", fileRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected"))
  .catch((error) => {
    console.error("Database connection error:", error);
    process.exit(1);
  });

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`listening to port http://localhost:${PORT}/`)
);
