import Express from "express";
// import passport from "passport";
import UserController from "../controllers/User_controller";
import userValidationSchema from "../validation/usemodel";

const User_router = Express.Router();

/**
 * @swagger
 * /user/signup:
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
 *               $ref: '#/components/schemas/signup'
 *       400:
 *         description: Bad Request
 */

User_router.post("/signup", UserController.signup);

/**
 * @swagger
 * /user/login:
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

/**
 * @swagger
 * /user/profile:
 *   get:
 *     tags:
 *       - User
 *     summary: Get user's profile information
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: Successfully retrieved user's profile
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *       "401":
 *         description: Unauthorized
 */

User_router.get("/profile", UserController.getProfile);
// (req, res) => {
// Only authenticated users with a valid JWT token can access this route
// });

export default User_router;
