
import mongoose from "mongoose";

const database_connect=async()=>{
    try {
        await mongoose.connect(process.env.DATABASE,{useNewUrlparser:true,useUnifiedTopology:true})
        console.log("connected sussfuly to CapstoneBackendDB");
    }
    catch(error){
        console.log(error.message);
        console.log("not connected");
    }
} 

export default database_connect;