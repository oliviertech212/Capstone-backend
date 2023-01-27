import session from "express-session";
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
