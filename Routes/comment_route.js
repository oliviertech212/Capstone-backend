

import  Express from "express";

import CommentController from "../controllers/comment_controller";

const Comment_Route=Express.Router();

Comment_Route.post("/post",CommentController.create);
Comment_Route.get("/getall",CommentController.getAll)
Comment_Route.get("/post",CommentController.getOne)




export default Comment_Route;