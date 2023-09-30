import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./router/user.js";
import routerPost from "./router/post.js";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();
connectDB();
app.use(express.json());
app.get("/connectverse", (req, res) => {
  res.json({ message: "we are live" });
});
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/connectverse/user", userRouter);
app.use("/connectverse/post", routerPost);
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server listeninig on PORT ", PORT);
  }
});
