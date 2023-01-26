import Express from "express";
import UserController from "../controllers/User_controller";
import CommentController from "../controllers/comment_controller";
import { commentValidation } from "../middleware/comment_validation";
import AdminController from "../controllers/admin";

const Comment_Route = Express.Router();

/**
 * @swagger
 * /articles/{id}/comments:
 *
 *   post:
 *     tags:
 *       - commentmessages
 *     summary: Create a new commentmessage
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/commentmessages'
 *     responses:
 *       201:
 *         description: Successfully created a new article
 *         content:
 *             application/json:
 *             schema:
 *               $ref: '#/components/schemas/commentmessages'
 *       400:
 *         description: Bad Request
 *
 * /articles/getall/comments:
 *   get:
 *     tags:
 *       - commentmessages
 *     summary: Retrieve all commentmessages
 *     responses:
 *       200:
 *         description: Successfully retrieved all articles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/commentmessages'
 *
 * /articles/{id}/delete:
 *   delete:
 *     tags:
 *        - commentmessages
 *     summary: Delete a single contact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: Successfully deleted post by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/commentmessages'
 *       "404":
 *         description: Post not found
 *       "400":
 *         description: Bad request
 */

Comment_Route.post(
  "/:id/comments",
  // UserController.authenticat,
  commentValidation,
  CommentController.create
);
Comment_Route.get("/getall/comments", CommentController.getAll);

Comment_Route.delete(
  "/:id/detete",
  // AdminController.authenticat,
  CommentController.delete
);

export default Comment_Route;
