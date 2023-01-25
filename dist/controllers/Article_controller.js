"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Article_model = _interopRequireDefault(require("../db_models/Article_model"));
var _cloudinary = _interopRequireDefault(require("../helper/cloudinary"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import dotenv from "dotenv";
// dotenv.config();
// import cloudinary from "cloudinary";
// const { API_KEY, API_SECRET, NAME } = process.env;

// cloudinary.config({
//   cloud_name: NAME,
//   api_key: API_KEY,
//   api_secret: API_SECRET,
// });

class Articlecontroller {
  static async create(req, res) {
    try {
      const result = await _cloudinary.default.uploader.upload(req.file.path);
      console.log(result);
      //   const article = await Article.create(req.body);

      const article = new _Article_model.default({
        image: result.secure_url,
        content: req.body.content,
        title: req.body.title
      });
      await article.save();
      res.status(201).json({
        article
      });
      console.log("article now is created");
    } catch {
      //   res.status(400).json({ error: error.message });
      console.log("can not create article");
    }
  }
  static async getAll(req, res) {
    try {
      const article = await _Article_model.default.find();
      res.status(201).json({
        article
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
      const article = await _Article_model.default.findById(id);
      res.status(201).json({
        article
      });
    } catch {
      res.status(400).json({
        error: error.message
      });
      console.log("can not create article");
    }
  }
  static async update(req, res) {
    try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = {
        new: true
      };
      const result = await _Article_model.default.findByIdAndUpdate(id, updatedData, options);
      res.send(result);
    } catch (error) {
      res.status(400).json({
        message: error.message
      });
    }
  }
  static async delete(req, res) {
    try {
      const id = req.params.id;
      const result = await _Article_model.default.deleteOne({
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
var _default = Articlecontroller;
exports.default = _default;