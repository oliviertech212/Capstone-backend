// import passport from "passport";
// import { Strategy as LocalStrategy } from "passport-local";
// import { Strategy as JwtStrategy } from "passport-jwt";

// import { ExtractJwt as ExtractJwt } from "passport-jwt";
// import UserSignup from "../db_models/User_model";
// import bcrypt from "bcrypt";
// import dotenv from "dotenv";

// dotenv.config();
// passport.use(
//   new LocalStrategy(
//     { usernameField: "email", passwordField: "password" },
//     async (email, password, done) => {
//       const user = await UserSignup.findOne({ email });
//       if (!user) {
//         return done(null, false, { message: "user not registered" });
//       }
//       const compare = await bcrypt.compare(password, user.password);
//       if (!compare) {
//         return done(null, false, { message: "wrong email/ email" });
//       }
//       return done(null, user);
//     }
//   )
// );

// passport.use(
//   "jwt",
//   new JwtStrategy(
//     {
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey: process.env.jwtStrng,
//     },
//     async (jwtPayload, done) => {
//       const user = await UserSignup.findById(jwtPayload.id);
//       if (!user) {
//         return done(null, false, { message: "User not found" });
//       }
//       return done(null, user);
//     }
//   )
// );
