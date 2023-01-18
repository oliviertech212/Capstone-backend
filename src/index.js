import Express from "express";
import passport from "passport";
import database_connect from "./db/database";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
// access routes
import router from "./Routes/contact_message";
import Article_Route from "./Routes/Article_Route";
import Comment_Route from "./Routes/comment_route";
import User_roure from "./Routes/User_route";
// import auth for use passport local startegy
// import "./auth/auth";
import securerouter from "./Routes/secure-routes";

const app = Express();
app.use(cors());
app.use(Express.json());

dotenv.config();

database_connect();
const port = process.env.PORT;

app.listen(port, () => {
  console.log("server is running on port", port);
});
app.use(bodyParser.urlencoded({ extended: false }));
// let use route
app.use("/contact", router);

// routes for Article
app.use("/articles", Article_Route);

// comment route
app.use("/articles", Comment_Route);

// user route
// Initialize Passport.js
// app.use(passport.initialize());
app.use("/user", User_roure);
// secure route
// app.use("/adm", passport.authenticate("jwt", { session: false }), securerouter);
app.use("/adm", User_roure);

app.use((req, res) => {
  res.json({ success: "error", message: "route not found" });
});
