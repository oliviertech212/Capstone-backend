"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const userValidationSchema = _joi.default.object({
  username: _joi.default.string().alphanum().min(3).max(30).required().unique().label("Username"),
  password: _joi.default.string().min(8).required().label("Password")
});
var _default = userValidationSchema;
exports.default = _default;