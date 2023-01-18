import mongoose from "mongoose";

// import Comment from "./comment_model";

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: "String",
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const Article = mongoose.model("Article", articleSchema);

export default Article;
