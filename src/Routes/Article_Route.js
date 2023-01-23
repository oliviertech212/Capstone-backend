import express from "express";
import upload from "./multer";
// access to Article controller
import Articlecontroller from "../controllers/Article_controller";
import Article_validation from "../middleware/Blog_validation";
import UserController from "../controllers/User_controller";
import { admin } from "../middleware/adminaccess";
import AdminController from "../controllers/admin";

const Article_Route = express.Router();
// UserController.authenticat
Article_Route.post(
  "/post",
  AdminController.authenticat,
  Article_validation,
  upload.single("image"),
  Articlecontroller.create
);
Article_Route.get(
  "/getall",
  UserController.authenticat,
  Articlecontroller.getAll
);
Article_Route.get(
  "/getOne/:id",
  UserController.authenticat,
  Articlecontroller.getOne
);
Article_Route.put(
  "/update/:id",
  UserController.authenticat,
  Article_validation,
  upload.single("image"),
  Articlecontroller.update
);
Article_Route.delete(
  "/delete/:id",
  UserController.authenticat,
  Articlecontroller.delete
);

export default Article_Route;
