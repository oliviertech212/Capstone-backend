import Express from "express";
import User from "../db_models/contact_message";
import { contactValidation } from "../middleware/contact_validation";
import UserController from "../controllers/User_controller";
import { admin } from "../middleware/adminaccess";

const router = Express.Router();

// router.post("/post", contactValidation, async (req, res) => {
//   try {
//     const data = new User({
//       name: req.body.name,
//       email: req.body.email,
//       message: req.body.message,
//     });
//     await data.save();
//     res.status(201).json(data);
//     console.log("msg sent sussfuly");
//   } catch (error) {
//     res.status(401).json(error.message);
//     console.log("it can not create user");
//   }
// });

/**
 * @swagger
 * /contact/post:
 *   post:
 *     tags:
 *       - contact-message
 *     summary: create a post
 *     security:
 *        - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/contactmessages'
 *     responses:
 *       "201":
 *         description: message sent Successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/contactmessages'
 *       "500":
 *         description: Internal server error
 */

router.post(
  "/post",
  contactValidation,
  UserController.authenticat,
  async (req, res) => {
    try {
      const { name, email, message } = req.body;
      const contact = new User({ name, email, message });
      await contact.save();
      res.status(201).json({ contact: contact });
    } catch (error) {
      res.status(500).json({ success: "error", message: error.message });
    }
  }
);

/**
//  * @swagger
//  * /contact/getall
//  *   get:
//  *     tags:
//  *       - contact-message
//  *     summary: Get all post
//  *     security:
//  *       - BearerAuth: []
//  *     responses:
//  *       "200":
//  *         description: Successfully retrieved all posts
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/contactmessages'
//  *       "400":
//  *         description: Bad request
//  */
/**
 * @swagger
 * /contact/getall:
 *   get:
 *     tags:
 *       - contact-message
 *     summary: Get all post
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       "200":
 *         description: Successfully retrieved all posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/contactmessages'
 *       "400":
 *         description: Bad request
 */

router.get("/getall", admin, async (req, res) => {
  try {
    const contact = await User.find({});
    res.status(200).json({ message: contact });
    // console.log(contact);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error.message);
  }
});

// /**
//  * @swagger
//  * /contact/getOne/{id}:
//  *   get:
//  *     tags:
//  *       - contact-message
//  *     summary: Get a single post by ID
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *     security:
//  *       - bearerAuth: []
//  *     responses:
//  *       "200":
//  *         description: Successfully retrieved post by ID
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/contactmessages'
//  *       "404":
//  *         description: Post not found
//  *       "500":
//  *         description: Internal server error
//  */

/**
 * @swagger
 * /contact/getOne/{id}:
 *   get:
 *     tags:
 *       - contact-message
 *     summary: Get a single post by ID
 *     security:
 *        - BearerAuth: []
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
 *               $ref: '#/components/schemas/contactmessages'
 *       "404":
 *         description: Post not found
 *       "500":
 *         description: Internal server error
 */

//Get by ID Method
router.get("/getOne/:id", admin, async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * @swagger
 * /contact/delete/{id}:
 *   delete:
 *     tags:
 *       - contact-message
 *     summary: Delete a single post by ID
 *     security:
 *         - BearerAuth: []
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
 *               $ref: '#/components/schemas/contactmessages'
 *       "404":
 *         description: Post not found
 *       "400":
 *         description: Bad request
 */

//Delete by ID Method
router.delete("/delete/:id", admin, async (req, res) => {
  try {
    const id = req.params.id;

    const result = await User.deleteOne({ _id: id });

    res
      .status(204)

      .json({ status: "success", deletedCount: result.deletedCount });
    // console.log(result.deletedCount);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
