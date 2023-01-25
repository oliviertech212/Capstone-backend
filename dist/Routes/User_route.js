"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _User_controller = _interopRequireDefault(require("../controllers/User_controller"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import passport from "passport";

const User_router = _express.default.Router();
User_router.post("/signup", _User_controller.default.signup);
User_router.post("/login", _User_controller.default.login);
User_router.get("/admin", _User_controller.default.getProfile, (req, res) => {
  // Only authenticated users with a valid JWT token can access this route
});
var _default = User_router;
exports.default = _default;