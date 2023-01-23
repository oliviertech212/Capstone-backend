"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _multer = _interopRequireDefault(require("multer"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// upload image
// for handling image upload

const upload = (0, _multer.default)({
  storage: _multer.default.diskStorage({}),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  fileFilter: (req, file, cb) => {
    let extention = _path.default.extname(file.originalname);
    if (!extention === ".jpg" && !extention === ".jpeg" && extention === ".png") {
      cb(new Error("Unsupported file!", false));
      return;
    }
    cb(null, true);
  }
});
var _default = upload;
exports.default = _default;