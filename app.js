import Express from "express";
import database_connect from "./database.js";
import cors from "cors";
import dotenv from "dotenv";
// access routes
// import router from "./Routes/post.js";



const app=Express();
app.use(cors());
app.use(Express.json());

dotenv.config();

database_connect();

// let use route
// app.use("/contact",router);


app.listen(3000,()=>{
    console.log("server is running on port",3000);
})
