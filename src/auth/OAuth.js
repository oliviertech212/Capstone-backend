import passport from "passport";

import dotenv from "dotenv";
dotenv.config();

import GoogleStrategy from "passport-google-oauth20";
import UserSignup from "../db_models/User_model";

dotenv.config();



passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID_GOOGLE,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "https://localhost:8000/auth/google/Capstone",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },

    function (accessToken, refreshToken, profile, cb) {
      UserSignup.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

export default passport;

// const express = require("express");

// const GoogleStrategy = require("passport-google-oauth20").Strategy;

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.CLIENT_ID,
//       clientSecret: process.env.CLIENT_SECRET,
//       callbackURL: "https://localhost:8000/auth/google/Capstone",
//       userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
//     },
//     function (accessToken, refreshToken, profile, cb) {
//       // here you can save the user profile information to your database
//       // and return the user object to be stored in the request object
//       return cb(null, profile);
//     }
//   )
// );

// export default passport;
