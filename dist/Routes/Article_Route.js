"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _multer = _interopRequireDefault(require("./multer"));
var _Article_controller = _interopRequireDefault(require("../controllers/Article_controller"));
var _Blog_validation = _interopRequireDefault(require("../middleware/Blog_validation"));
var _User_controller = _interopRequireDefault(require("../controllers/User_controller"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// access to Article controller

const Article_Route = _express.default.Router();
// UserController.authenticat
Article_Route.post("/post", _User_controller.default.authenticat, _Blog_validation.default, _multer.default.single("image"), _Article_controller.default.create);
Article_Route.get("/getall", _Article_controller.default.getAll);
Article_Route.get("/getall/:id", _Article_controller.default.getOne);
Article_Route.patch("/update/:id", _User_controller.default.authenticat, _Blog_validation.default, _Article_controller.default.update);
Article_Route.delete("/delete/:id", _User_controller.default.authenticat, _Article_controller.default.delete);
var _default = Article_Route;
exports.default = _default;