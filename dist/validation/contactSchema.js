"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const contactValidationSchema = _joi.default.object({
  email: _joi.default.string().email().required().label("Email"),
  message: _joi.default.string().min(30).max(100).required().label("message"),
  name: _joi.default.string().required().label("username")
});
var _default = contactValidationSchema;
exports.default = _default;