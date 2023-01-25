import express from "express";
import passport from "passport";
import UserController from "../controllers/User_controller";
const securerouter = express.Router();

securerouter.get("/admin", (req, res, next) => {
  res.json({
    message: "You made it to the secure route",
    user: req.user,
    token: req.query.secret_token,
  });
});
export default securerouter;
