import express from "express";
import notFoundMiddleware from "./middleware/notFound.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import dotenv from "dotenv";
import connectDb from "./db/connect.js";
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobRoutes.js";
dotenv.config();
const app = express();
app.use(express.json())



app.get("/", (req, res) => {
  res.send("welcome");
});

//using routes with base URL
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);



//error middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const PORT = process.env.PORT || 5001;
app.listen(PORT, async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    console.log(`App is listening on port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
