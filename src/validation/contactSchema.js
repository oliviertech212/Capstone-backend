import Joi from "joi";
const contactValidationSchema = Joi.object({
  email: Joi.string().email().required().label("Email"),
  message: Joi.string().min(30).max(100).required().label("message"),
  name: Joi.string().required().label("username"),
});

export default contactValidationSchema;
