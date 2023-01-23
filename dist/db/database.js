"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const database_connect = async () => {
  try {
    await _mongoose.default.connect(process.env.DATABASE, {
      useNewUrlparser: true,
      useUnifiedTopology: true
    });
    console.log("connected sussfuly to CapstoneBackendDB");
  } catch (error) {
    console.log(error.message);
    console.log("not connected");
  }
};
var _default = database_connect;
exports.default = _default;