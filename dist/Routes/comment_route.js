"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _User_controller = _interopRequireDefault(require("../controllers/User_controller"));
var _comment_controller = _interopRequireDefault(require("../controllers/comment_controller"));
var _comment_validation = require("../middleware/comment_validation");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Comment_Route = _express.default.Router();
Comment_Route.post("/:id/comments", _comment_validation.commentValidation, _comment_controller.default.create);
Comment_Route.get("/getall/comments", _comment_controller.default.getAll);
Comment_Route.delete("/:id/detete", _User_controller.default.authenticat, _comment_controller.default.delete);
var _default = Comment_Route;
exports.default = _default;