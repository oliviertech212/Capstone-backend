import Joi from "joi";

const Blog_Validation = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  image: Joi.string().required(),
  comments: Joi.array(),
});
export { Blog_Validation };
