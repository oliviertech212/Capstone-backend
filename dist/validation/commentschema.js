"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const commentValidationSchema = _joi.default.object({
  username: _joi.default.string().email().required().label("Email"),
  comment: _joi.default.string().required().label("Comment"),
  article: _joi.default.string().label("Article ID")
});
var _default = commentValidationSchema;
exports.default = _default;