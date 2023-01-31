import express from "express";
import upload from "./multer";
// access to Article controller
import Articlecontroller from "../controllers/Article_controller";
import Article_validation from "../middleware/Blog_validation";
import UserController from "../controllers/User_controller";
import { admin } from "../middleware/adminaccess";
import { findUserById } from "../middleware/adminaccess";
import AdminController from "../controllers/admin";

const Article_Route = express.Router();

/**
 * @swagger
 * /articles/post:
 *
 *   post:
 *     tags:
 *       - Article
 *     summary: Create a new article
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *              $ref: '#/components/schemas/Blogpost'
 *     responses:
 *       201:
 *         description: Successfully created a new article
 *         content:
 *            multipart/form-data:
 *             schema:
 *               $ref: '#/components/schemas/Blogpost'
 *       400:
 *         description: Bad Request
 *
 * /articles/getall:
 *   get:
 *     tags:
 *       - Article
 *     summary: Retrieve all articles
 *     responses:
 *       200:
 *         description: Successfully retrieved all articles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Blogpost'

 * /articles/getOne/{id}:
 *   get:
 *     tags:
 *       - Article
 *     summary: Get a single post by ID
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
 *         description: Successfully retrieved post by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blogpost'
 *       "404":
 *         description: Post not found
 *       "500":
 *         description: Internal server error
 * 
 * /articles/delete/{id}:
 *   delete:
 *     tags:
 *        - Article
 *     summary: Delete a single post by ID
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
 *               $ref: '#/components/schemas/Blogpost'
 *       "404":
 *         description: Post not found
 *       "400":
 *         description: Bad request
 * /articles/update/{id}:
 *   put:
 *     tags:
 *       - Article
 *     summary: Update an existing article
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the article to update
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Blogpost'
 *     responses:
 *       200:
 *         description: Successfully updated the article
 *         content:
 *            multipart/form-data:
 *             schema:
 *               $ref: '#/components/schemas/Blogpost'
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Article not found
 */

Article_Route.post(
  "/post",
  // UserController.authenticat,
  admin,
  Article_validation,
  upload.single("image"),
  Articlecontroller.create
);
Article_Route.get(
  "/getall",
  // UserController.authenticat,
  Articlecontroller.getAll
);
Article_Route.get(
  "/getOne/:id",
  // UserController.authenticat,
  admin,
  Articlecontroller.getOne
);
Article_Route.put(
  "/update/:id",
  // UserController.authenticat,
  admin,
  Article_validation,
  upload.single("image"),
  Articlecontroller.update
);
Article_Route.delete(
  "/delete/:id",
  // UserController.authenticat,
  admin,
  Articlecontroller.delete
);

export default Article_Route;
