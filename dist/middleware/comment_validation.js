"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentValidation = commentValidation;
var _commentschema = _interopRequireDefault(require("../validation/commentschema"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// export async function commentValidation(req, res, next) {
//   try {
//     commentValidationSchema.validate(req.body);
//     next();
//   } catch (error) {
//     res.status(400).json({ error: error.details[0].message });
//   }
// }

function commentValidation(req, res, next) {
  const {
    error,
    value
  } = _commentschema.default.validate(req.body, {
    abortEarly: false
  });
  if (error) {
    return res.status(400).send(error.message);
  }
  req.validatedData = value;
  next();
}