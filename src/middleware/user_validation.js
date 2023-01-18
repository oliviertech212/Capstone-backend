import userValidationSchema from "../validation/contactSchema";

export function signupValidation(req, res, next) {
  const { error, value } = userValidationSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    return res.status(400).send(error.message);
  }
  req.validatedData = value;

  next();
}
