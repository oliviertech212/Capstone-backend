import Express from "express";

import passport from "../auth/OAuth";

const OAuth_Route = Express.Router();

/**
 * @swagger
 * /auth/google:
 *   get:
 *     tags:
 *       - OAuth
 *     summary: Authenticate with Google
 *     security:
 *       - OAuth2: [read, write, admin]
 *     responses:
 *       302:
 *         description: Redirect to Google's authentication page
 *       401:
 *         description: Unauthorized - Authentication failed
 */

OAuth_Route.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile"],
    failureRedirect: "/auth/google/failure",
  })
);

OAuth_Route.get(
  "/auth/google/Capstone",
  passport.authenticate("google", { failureRedirect: "/auth/google/failure" }),
  function (req, res) {
    console.log(res);
    // success, generate a JWT and send it as a response
    const token = jwt.sign({ user: req.user }, secretKey, { expiresIn: "1h" });
    res.json({ token });
  }
);

/**
 * @swagger
 * /auth/google/failure:
 *   get:
 *     tags:
 *       - OAuth
 *     summary: Handle Google authentication failure
 *     responses:
 *       401:
 *         description: Unauthorized - Google authentication failed
 */

OAuth_Route.get("/auth/google/failure", function (req, res) {
  res
    .status(401)
    .json({ success: "error", message: "Google authentication failed" });
});

export default OAuth_Route;
