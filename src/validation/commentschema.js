import Joi from "joi";
const commentValidationSchema = Joi.object({
  username: Joi.string().email().required().label("Email"),
  comment: Joi.string().required().label("Comment"),
  article: Joi.string().label("Article ID"),
});

export default commentValidationSchema;
