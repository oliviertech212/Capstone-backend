import express from "express";
import upload from "./multer";
// access to Article controller
import Articlecontroller from "../controllers/Article_controller";

const Article_Route = express.Router();

Article_Route.post("/post", upload.single("image"), Articlecontroller.create);
Article_Route.get("/getall", Articlecontroller.getAll);
Article_Route.get("/getall/:id", Articlecontroller.getOne);
Article_Route.patch("/update/:id", Articlecontroller.update);
Article_Route.delete("/delete/:id", Articlecontroller.delete);

export default Article_Route;
