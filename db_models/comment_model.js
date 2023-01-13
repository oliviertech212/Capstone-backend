import mongoose from "mongoose";

const commentSchema=mongoose.Schema({
    username:{
      type:String,
      required:[true,"please your email is required"]
    },
    comment:{
      type:String,
      required:[true,"please enter your comment"]
    }
  });


const Comment=mongoose.model("Comment",commentSchema);

export default Comment;