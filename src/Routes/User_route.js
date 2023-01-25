import Express from "express";
// import passport from "passport";
import UserController from "../controllers/User_controller";

const User_router = Express.Router();

User_router.post("/signup", UserController.signup);
User_router.post("/login", UserController.login);
// to get user
User_router.get("/profile", UserController.getProfile);
// (req, res) => {
// Only authenticated users with a valid JWT token can access this route
// });

export default User_router;
