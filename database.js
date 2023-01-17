
import mongoose from "mongoose";

const database_connect=async()=>{
    try {
        await mongoose.connect(process.env.DATABASE,{useNewUrlparser:true,useUnifiedTopology:true})
        console.log("connected sussfuly");
    }
    catch(error){
        console.log(error.message);
    }
} 

export default database_connect;