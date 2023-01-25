import Joi from "joi";

const Blog_Validation = Joi.object({
  title: Joi.string().min(20).required(),
  content: Joi.string().required().min(20),
  image: Joi.string().required(),
  comments: Joi.array(),
});
export { Blog_Validation };
