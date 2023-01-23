"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _cloudinary = _interopRequireDefault(require("cloudinary"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import cloudinary from "cloudinary";
// import dotenv from "dotenv";
// dotenv.config();

// cloudinary.config({
//   cloud_name: process.env.NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
// });

// export default cloudinary;

_dotenv.default.config();
_cloudinary.default.config({
  cloud_name: process.env.NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});
var _default = _cloudinary.default;
exports.default = _default;