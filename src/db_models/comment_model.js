import mongoose from "mongoose";

// /**
//  * @swagger
//  * components:
//  *   schemas:
//  *     commentmessages:
//  *       type: object
//  *       required:
//  *         - username
//  *         - comment
//  *       properties:
//  *         id:
//  *           type: string
//  *           description: The auto-generated id of the message
//  *         username:
//  *           type: string
//  *         comment:
//  *           type: string
//  *         article:
//  *         createdAt:
//  *           type: string
//  *           format: date
//  *           description: The date for the message
//  */

/**
 * @swagger
 * components:
 *   schemas:
 *     commentmessages:
 *       type: object
 *       required:
 *         - username
 *         - comment
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the comment message
 *         username:
 *           type: string
 *           description: The username of the person leaving the comment
 *         comment:
 *           type: string
 *           description: The comment left by the user
 *         article:
 *           type: string
 *           description: The id of the article the comment is associated with
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the comment was created
 */

const commentSchema = mongoose.Schema(
  {
    username: {
      type: String,
      // required: [true, "please your email is required"],
    },
    comment: {
      type: String,
      // required: [true, "please enter your comment"],
    },
    article: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
      required: true,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
