"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const commentSchema = _mongoose.default.Schema({
  username: {
    type: String
    // required: [true, "please your email is required"],
  },

  comment: {
    type: String
    // required: [true, "please enter your comment"],
  },

  article: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "Article",
    required: true
  }
});
const Comment = _mongoose.default.model("Comment", commentSchema);
var _default = Comment;
exports.default = _default;