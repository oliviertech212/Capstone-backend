"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const dataSchema = new _mongoose.default.Schema({
  name: {
    // required: true,
    type: String
  },
  email: {
    // required: true,
    type: String
  },
  message: {
    // required:true,
    type: String
  }
});
const User = _mongoose.default.model("Message", dataSchema);
var _default = User; // import mongoose from "mongoose";
// const schema=mongoose.Schema({
//     name: {
//          required: true,
//          type: String
//      },
//      email: {
//          required: true,
//          type: String
//      },
//      message: {
//          required:true,
//          type: String
//      }
// })
// const User=mongoose.model("Users",schema);
// export default User;
exports.default = _default;