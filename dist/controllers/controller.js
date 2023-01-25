"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _contact_message = _interopRequireDefault(require("../db_models/contact_message"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import User from "../models/post";
// import user from "../models/post";

class usercontroller {
  static async getAllUsers(req, res) {
    try {
      const Users = await _contact_message.default.find();
      res.status(200).json(Users);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
  static async createUser(req, res) {
    try {
      const data = new _contact_message.default({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
      });
      await data.save();
      res.status(201).json(data);
      console.log("msg sent sussfuly");
    } catch (error) {
      res.status(401).json(error.message);
      console.log("it can not create user");
    }
  }
}
var _default = usercontroller;
exports.default = _default;