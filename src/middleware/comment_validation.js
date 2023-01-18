import commentValidationSchema from "../validation/commentschema";

// export async function commentValidation(req, res, next) {
//   try {
//     commentValidationSchema.validate(req.body);
//     next();
//   } catch (error) {
//     res.status(400).json({ error: error.details[0].message });
//   }
// }

export function commentValidation(req, res, next) {
  const { error, value } = commentValidationSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    return res.status(400).send(error.message);
  }
  req.validatedData = value;

  next();
}
