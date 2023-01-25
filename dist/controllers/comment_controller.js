"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Article_model = _interopRequireDefault(require("../db_models/Article_model"));
var _comment_model = _interopRequireDefault(require("../db_models/comment_model"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
      const article = await _Article_model.default.findById(req.params.id);
      if (!article) {
        res.json({
          status: "error",
          message: "Article not found"
        });
      }
      const comment = new _comment_model.default({
        username: req.body.username,
        comment: req.body.comment,
        article: article._id
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
      const updateArticle = await _Article_model.default.findById(req.params.id).populate("comments");
      return res.send(updateArticle);
      // res.json({ status: "error", message: "Article not found" });
      res.status(201).json(comment);
      console.log("comment sent sussfuly");
    } catch (error) {
      res.status(401).json(error.message);
      console.log("coment not sent");
    }
  }
  static async getAll(req, res) {
    try {
      const cmt = await _comment_model.default.find();
      res.status(201).json({
        cmt
      });
    } catch {
      res.status(400).json({
        error: error.message
      });
      console.log("can not create article");
    }
  }
  static async getOne(req, res) {
    try {
      const id = req.params.id;
      const cmt = await _comment_model.default.findById(id);
      res.status(201).json({
        cmt
      });
    } catch {
      res.status(400).json({
        error: error.message
      });
      console.log("can not create article");
    }
  }
  static async delete(req, res) {
    try {
      const id = req.params.id;
      const result = await _comment_model.default.deleteOne({
        id
      });
      res.send(result);
    } catch (error) {
      res.status(400).json({
        message: error.message
      });
    }
  }
}
var _default = CommentController;
exports.default = _default;