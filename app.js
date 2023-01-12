import Express from "express";
import database_connect from "./database";
import cors from "cors";
import dotenv from "dotenv";
// access routes
import router from "./Routes/contact_message";
import Article_Route from "./Routes/Article_Route"




const app=Express();
app.use(cors());
app.use(Express.json());

dotenv.config();

database_connect();




app.listen(8000,()=>{
    console.log("server is running on port",8000);
})

// let use route
app.use("/contact",router);

// routes for Article
app.use("/articles",Article_Route);
