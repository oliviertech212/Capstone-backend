import Express from "express";

import passport from "../auth/OAuth";

const OAuth_Route = Express.Router();

// OAuth_Route.get(
//   "/auth/google/Capstone",
//   passport.authenticate("google", { scope: ["profile"] }),
//   (req, res) => {
//     res.json({ message: "now you're good to go" });
//     console.log(`Error: ${err}`);
//   }
// );

// OAuth_Route.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile"] })
// );

// OAuth_Route.get(
//   "/auth/google/Capstone",
//   passport.authenticate("google", { failureRedirect: "/login" }),
//   function (req, res) {
//     // Successful authentication, redirect home.
//     res.redirect("/");
//   }
// );

// OAuth_Route.get("/", function (req, res) {
//   if (req.user) {
//     res.send("Hello " + req.user.displayName);
//   } else {
//     res.send("Please login");
//   }
// });

OAuth_Route.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile"],
    failureRedirect: "/auth/google/failure",
  })
);

OAuth_Route.get("/auth/google/failure", function (req, res) {
  res
    .status(401)
    .json({ success: "error", message: "Google authentication failed" });
});

export default OAuth_Route;
