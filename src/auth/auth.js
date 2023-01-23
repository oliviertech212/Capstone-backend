// import mongoose from "mongoose";
// import session from "express-session";
// import passportLocalMongoose from "passport-local-mongoose";
// import Express from "express";
// import passport from "passport";
// import database_connect from "../db/database";
// import cors from "cors";
// import dotenv from "dotenv";
// import bodyParser from "body-parser";
// import UserSignup from "../db_models/User_model";

// const app = Express();
// app.use(cors());
// app.use(Express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// dotenv.config();

// app.use(
//   session({
//     secret: "Keep secret",
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// // to tell our app to start use passport for authentivcation

// app.use(passport.initialize());
// app.use(passport.session());

// database_connect();

// const UserSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   role: {
//     type: String,
//     default: " user",
//   },
// });

// // to use passport ;ocal mongoose wuse our schema as plugin
// UserSchema.plugin(passportLocalMongoose);

// passport.use(UserSignup.createStrategy());
// passport.serializeUser(UserSignup.serializeUser());
// passport.deserializeUser(UserSignup.deserializeUser());

import mongoose from "mongoose";
import session from "express-session";
import passportLocalMongoose from "passport-local-mongoose";
import passport from "passport";
import UserSignup from "../db_models/User_model";

app.use(
  session({
    secret: "Keep secret",
    resave: false,
    saveUninitialized: true,
  })
);

// tell our app to start using passport for authentication
app.use(passport.initialize());
app.use(passport.session());

// use the UserSignup model to set up the authentication strategy
passport.use(UserSignup.createStrategy());

// serialize and deserialize the user model to and from the session
passport.serializeUser(UserSignup.serializeUser());
passport.deserializeUser(UserSignup.deserializeUser());
