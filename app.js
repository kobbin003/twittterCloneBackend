import express from "express";
// const connectDB = require("../config/db");
import connectDB from "./db.js";

import users from "./routes/api/users.js";
import auth from "./routes/api/auth.js";
import posts from "./routes/api/posts.js";
import profile from "./routes/api/profile.js";

const app = express();
// const router = express.Router();

//connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"));
// app.use(
//   "/",
//   router.get("/", (req, res) => res.send("API running"))
// );

// define Routes

app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/posts", posts);
app.use("/api/profile", profile);

export default app;
