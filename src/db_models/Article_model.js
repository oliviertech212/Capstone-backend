import mongoose from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Blogpost:
 *       type: object
 *       required:
 *         - title
 *         - content
 *         - image
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the message
 *         title:
 *           type: string
 *         content:
 *           type: string
 *         image:
 *           type: file
 *           format: binary
 *         comments:
 *            type: array
 *            items:
 *             $ref: '#/components/schemas/commentmessages'
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date for the blog
 */
//  * BlogpostResponse:
//  *       type: object
//  *       properties:
//  *         _id:
//  *            type: string
//  *         title:
//  *           type: string
//  *         content:
//  *           type: string
//  *         image:
//  *           type: string
//  *         createdAt:
//  *           type: string
//  */

// import Comment from "./comment_model";

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: "String",
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const Article = mongoose.model("Article", articleSchema);

export default Article;
