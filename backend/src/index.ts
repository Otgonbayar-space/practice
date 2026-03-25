import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
// import moviesRouter from "./routes/movies";
import restaurantsRouter from "./routes/restaurants";

const app = express();
const PORT = process.env.PORT || 4000;
const MONGODB_URI = "mongodb+srv://kaobuuu30_db_user:XquU25mpf8M8ZhUG@cluster0.c5uvlyc.mongodb.net/sample_restaurants";

app.use(cors());
app.use(express.json());

// app.use("/api/movies", moviesRouter);
app.use("/api/res", restaurantsRouter);

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB (sample_restaurants)");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err: Error) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

export default app;
