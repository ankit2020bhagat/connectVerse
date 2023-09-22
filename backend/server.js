import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./router/User.js";
dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();
connectDB();
app.use(express.json());
app.get("/connectverse", (req, res) => {
  res.json({ message: "we are live" });
});
app.use("/connectverse", router);
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server listeninig on PORT ", PORT);
  }
});
