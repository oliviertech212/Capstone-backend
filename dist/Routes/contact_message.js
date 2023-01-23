"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _mongoose = _interopRequireWildcard(require("mongoose"));
var _contact_message = _interopRequireDefault(require("../db_models/contact_message"));
var _contact_validation = require("../middleware/contact_validation");
var _User_controller = _interopRequireDefault(require("../controllers/User_controller"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.post("/post", _contact_validation.contactValidation, async (req, res) => {
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
});
router.get("/getall",
// UserController.authenticat,
async (req, res) => {
  try {
    const Users = await _contact_message.default.find();
    res.status(200).json(Users);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await _contact_message.default.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

//Update by ID Method
// router.patch("/update/:id", contactValidation, async (req, res) => {
//   try {
//     const id = req.params.id;
//     const updatedData = req.body;
//     const options = { new: true };

//     const result = await User.findByIdAndUpdate(id, updatedData, options);

//     res.send(result);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

//Delete by ID Method
router.delete("/delete/:id", _User_controller.default.authenticat, async (req, res) => {
  try {
    const id = req.params.id;
    const data = await _mongoose.Model.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});
var _default = router;
exports.default = _default;