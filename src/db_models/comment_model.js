import mongoose from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     commentmessages:
 *       type: object
 *       required:
 *         - username
 *         - comment
 *         - article
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the message
 *         username:
 *           type: string
 *         comment:
 *           type: string
 *         article:
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date for the message
 */

const commentSchema = mongoose.Schema({
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
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
