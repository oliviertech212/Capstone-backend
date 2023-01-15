import Express from "express";

import UserController from "../controllers/User_controller";

const User_router = Express.Router();

User_router.post("/post", UserController.createUser);

export default User_router;
