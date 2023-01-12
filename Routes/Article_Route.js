


import express  from "express";
// import mongoose from "mongoose";

// access to Article controller
import Articlecontroller from "../controllers/Article_controller";

const  Article_Route= express.Router();

Article_Route.post('/post', Articlecontroller.create);
Article_Route.get('/getall', Articlecontroller. getAll);
Article_Route.get('/getall/:id', Articlecontroller. getOne);


export default Article_Route;


