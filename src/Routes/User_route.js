import Express from "express";
// import passport from "passport";
import UserController from "../controllers/User_controller";

const User_router = Express.Router();

/**
 * @swagger
 * /signup:
 *   post:
 *     tags:
 *       - User
 *     summary: Create user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/signup'
 *     responses:
 *       201:
 *         description: Successful user registration
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *       400:
 *         description: Bad Request
 */

User_router.post("/signup", UserController.signup);

/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - User
 *     summary: Login a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 required: true
 *               password:
 *                 type: string
 *                 required: true
 *     responses:
 *       "200":
 *         description: Successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *       "401":
 *         description: Invalid credentials
 */
User_router.post("/login", UserController.login);
// to get user

User_router.get("/profile", UserController.getProfile);
// (req, res) => {
// Only authenticated users with a valid JWT token can access this route
// });

export default User_router;
