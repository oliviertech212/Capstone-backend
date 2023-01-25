import contactValidationSchema from "../validation/contactSchema";

export function contactValidation(req, res, next) {
  const { error, value } = contactValidationSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    return res.status(400).send(error.message);
  }
  req.validatedData = value;

  next();
}
