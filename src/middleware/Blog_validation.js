import { Blog_Validation } from "../validation/blogSchema";

export default function Article_validation(req, res, next) {
  const { error, value } = Blog_Validation.validate(req.formData, {
    abortEarly: false,
  });
  if (error) {
    return res.status(400).send({ success: "error", message: error.message });
    // console.log(error.message);
  }
  req.validatedData = value;

  next();
}

// export { Article_validation };
