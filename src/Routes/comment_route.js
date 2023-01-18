import Express from "express";
import UserController from "../controllers/User_controller";
import CommentController from "../controllers/comment_controller";
import { commentValidation } from "../middleware/comment_validation";

const Comment_Route = Express.Router();

Comment_Route.post(
  "/:id/comments",
  commentValidation,
  CommentController.create
);
Comment_Route.get("/getall/comments", CommentController.getAll);
Comment_Route.delete(
  "/:id/detete",
  UserController.authenticat,
  CommentController.delete
);

export default Comment_Route;
