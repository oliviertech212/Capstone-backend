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

import securerouter from "./Routes/secure-routes";

// import auth for use passport google startegy
import OAuth_Route from "./Routes/OAuthroute";

import Swaggerui from "swagger-ui-express";
import document from "./swagger";

const app = Express();
app.use(cors({ origin: "*", methods: "GET,HEAD,PUT,PATCH,POST,DELETE" }));
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

// parse application/json
app.use(bodyParser.json());

// routes for Article
app.use("/articles", Article_Route);

// comment route
app.use("/articles", Comment_Route);

// user route
// Initialize Passport.js
// app.use(passport.initialize());
app.use("/user", User_roure);
app.use("/admin", securerouter);
// secure route
app.use("/adm", User_roure);

// oauth with google
app.use("/", OAuth_Route);
// Access-Control-Allow-Origin" for google oauth
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://olivier-tech.netlify.app");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// swagger
app.use("/swaggerapi-docs", Swaggerui.serve, Swaggerui.setup(document));

// Access-Control-Allow-Origin" for google oauth
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://olivier-tech.netlify.app");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use((req, res) => {
  res.json({ success: "error", message: "route not found" });
});

export default app;
