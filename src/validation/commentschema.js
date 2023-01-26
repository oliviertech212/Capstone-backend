import Joi from "joi";
const commentValidationSchema = Joi.object({
  username: Joi.string().email().label("username"),
  comment: Joi.string().label("Comment"),
});

export default commentValidationSchema;
