import express from "express";
import cors from "cors";
import "dotenv/config";
import songRouter from "./src/routes/songRoute.js";

import albumRouter from "./src/routes/albumRoute.js";
import connectDb from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";

//app config
const app = express();
const port = process.env.PORT || 3000;
connectDb()
connectCloudinary()
//middlewares
app.use(express.json());
app.use(cors());

//initializing routes
app.use('/api/song' ,songRouter)
app.use('/api/album',albumRouter)

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`listing to port ${port

  }`);
});
