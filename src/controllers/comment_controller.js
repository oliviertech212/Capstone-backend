import Article from "../db_models/Article_model";
import Comment from "../db_models/comment_model";
// import { Model } from "mongoose";

class CommentController {
  // static  async create(req,res){
  //     try{
  //         const cmt=await Comment.create(req.body);

  //         res.status(201).json({cmt});
  //         console.log("comment sent");
  //     }catch{
  //         // res.status(400).json({ error: error.message });
  //         console.log("coment not sent");
  //     }
  // }

  static async create(req, res) {
    try {
      const article = await Article.findById(req.params.id);
      if (!article) {
        res.json({ status: "error", message: "Article not found" });
      }

      const comment = new Comment({
        username: req.body.username,
        comment: req.body.comment,
        article: article._id,
      });

      // const commentSave =
      await comment.save();
      article.comments.push(comment);
      // console.log("here is coomment", commentSave);
      // await Article.findByIdAndUpdate(req.params.id, {
      //   $push: { comments: commentSave },
      // });
      await article.save();
      // let use mongoose populate method
      const updateArticle = await Article.findById(req.params.id).populate(
        "comments"
      );
      res.status(201).json({ status: "success", comment: updateArticle });
      console.log("comment sent sussfuly");
    } catch (error) {
      res.status(401).json({ error: error.message });
      console.log("coment not sent");
    }
  }

  static async getAll(req, res) {
    try {
      const cmt = await Comment.find();
      res.status(201).json({ cmt });
    } catch {
      res.status(400).json({ error: error.message });
      console.log("can not create article");
    }
  }

  static async getOne(req, res) {
    try {
      const id = req.params.id;
      const cmt = await Comment.findById(id);
      res.status(201).json({ cmt });
    } catch {
      res.status(400).json({ error: error.message });
      console.log("can not create article");
    }
  }

  static async delete(req, res) {
    try {
      const id = req.params.id;

      const result = await Comment.deleteOne({ id });

      res.status(200).json({ status: "success", deleted: result });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default CommentController;
