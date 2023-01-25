"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contactValidation = contactValidation;
var _contactSchema = _interopRequireDefault(require("../validation/contactSchema"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function contactValidation(req, res, next) {
  const {
    error,
    value
  } = _contactSchema.default.validate(req.body, {
    abortEarly: false
  });
  if (error) {
    return res.status(400).send(error.message);
  }
  req.validatedData = value;
  next();
}