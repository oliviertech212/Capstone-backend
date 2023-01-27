import Express from "express";
import UserController from "../controllers/User_controller";
import CommentController from "../controllers/comment_controller";
import { commentValidation } from "../middleware/comment_validation";
import AdminController from "../controllers/admin";
import { admin } from "../middleware/adminaccess";
const Comment_Route = Express.Router();

// /**
//  * @swagger
//  * /articles/{id}/comments:
//  *   post:
//  *     tags:
//  *       - commentmessages
//  *     summary: Create a new commentmessage

//  *     parameters:
//  *       - name: id
//  *         in: path
//  *         required: true
//  *     requestBody:
//  *       required: true
//  *       content:
//  *          application/json:
//  *           schema:
//  *              $ref: '#/components/schemas/commentmessages'
//  *     responses:
//  *       201:
//  *         description: Successfully created a new article
//  *         content:
//  *             application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/commentmessages'
//  *       400:
//  *         description: Bad Request
//  */

/**
 * @swagger
 * /articles/{id}/comments:
 *   post:
 *     tags:
 *       - commentmessages
 *     summary: Create a new comment message
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The id of the article the comment is associated with
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/commentmessages'
 *     responses:
 *       201:
 *         description: Successfully created a new comment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/commentmessages'
 *       400:
 *         description: Bad Request
 */

/**
 * @swagger
 * /articles/getall/comments:
 *   get:
 *     tags:
 *       - commentmessages
 *     summary: Retrieve all commentmessages
 *     security:
 *       - BearerAuth: []
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
 *     security:
 *       - BearerAuth: []
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
  UserController.authenticat,
  commentValidation,
  CommentController.create
);
Comment_Route.get("/getall/comments", admin, CommentController.getAll);

Comment_Route.delete("/:id/delete", admin, CommentController.delete);

export default Comment_Route;
