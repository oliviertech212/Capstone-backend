import express from "express";
import upload from "./multer";
// access to Article controller
import Articlecontroller from "../controllers/Article_controller";
import Article_validation from "../middleware/Blog_validation";
import UserController from "../controllers/User_controller";

const Article_Route = express.Router();
// UserController.authenticat
Article_Route.post(
  "/post",
  Article_validation,
  upload.single("image"),
  Articlecontroller.create
);
Article_Route.get("/getall", Articlecontroller.getAll);
Article_Route.get("/getall/:id", Articlecontroller.getOne);
Article_Route.patch(
  "/update/:id",
  Article_validation,
  Articlecontroller.update
);
Article_Route.delete("/delete/:id", Articlecontroller.delete);

export default Article_Route;
