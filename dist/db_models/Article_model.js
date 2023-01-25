"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import Comment from "./comment_model";

const articleSchema = new _mongoose.default.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: "String",
  comments: [{
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "Comment"
  }]
});
const Article = _mongoose.default.model("Article", articleSchema);
var _default = Article;
exports.default = _default;