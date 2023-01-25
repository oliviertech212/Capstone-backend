"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const UserSchema = new _mongoose.default.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});
UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
const User = _mongoose.default.model("Signup", UserSchema);
var _default = User;
exports.default = _default;