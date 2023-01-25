"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Article_validation;
var _blogSchema = require("../validation/blogSchema");
function Article_validation(req, res, next) {
  const {
    error,
    value
  } = _blogSchema.Blog_Validation.validate(req.formData, {
    abortEarly: false
  });
  if (error) {
    // return res.status(400).send(error.message);
    console.log(error.message);
  }
  req.validatedData = value;
  next();
}

// export { Article_validation };