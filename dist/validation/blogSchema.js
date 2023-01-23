"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Blog_Validation = void 0;
var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Blog_Validation = _joi.default.object({
  title: _joi.default.string().min(20).required(),
  content: _joi.default.string().required().min(20),
  image: _joi.default.string().required(),
  comments: _joi.default.array()
});
exports.Blog_Validation = Blog_Validation;