

import mongoose from "mongoose";
const articleSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
    // ,
    // image:{
    //   type:String
    // }
  });
  
  const Article = mongoose.model('Article', articleSchema);

  export default Article; 