import Joi from "joi";
const userValidationSchema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
    // .unique()
    .label("username"),
  password: Joi.string().min(8).required().label("Password"),
});

export default userValidationSchema;
