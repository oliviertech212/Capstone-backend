import Express from "express";
import mongoose from "mongoose";
import User from "../db_models/contact_message";
import { Model } from "mongoose";
import { contactValidation } from "../middleware/contact_validation";
import UserController from "../controllers/User_controller";

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
 * /post:
 *   post:
 *     tags:
 *       - contact-message
 *     summary: create a post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Data'
 *     responses:
 *       "201":
 *         description: Successfully created post
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DataResponse'
 *       "500":
 *         description: Internal server error
 */

router.post("/post", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new User({ name, email, message });
    await contact.save();
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ success: "error", message: error.message });
  }
});

/**
 * @swagger
 * /getall:
 *   get:
 *     tags:
 *       - contact-message
 *     summary: Get all post
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: Successfully retrieved all posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DataResponse'
 *       "400":
 *         description: Bad request
 */

router.get("/getall", UserController.authenticat, async (req, res) => {
  try {
    const contact = await User.find();
    res.status(200).json(contact);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

/**
 * @swagger
 * /getOne/{id}:
 *   get:
 *     tags:
 *       - contact-message
 *     summary: Get a single post by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: Successfully retrieved post by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DataResponse'
 *       "404":
 *         description: Post not found
 *       "500":
 *         description: Internal server error
 */

//Get by ID Method
router.get("/getOne/:id", UserController.authenticat, async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
// router.patch("/update/:id", contactValidation, async (req, res) => {
//   try {
//     const id = req.params.id;
//     const updatedData = req.body;
//     const options = { new: true };

//     const result = await User.findByIdAndUpdate(id, updatedData, options);

//     res.send(result);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

/**
 * @swagger
 * /delete/{id}:
 *   delete:
 *     tags:
 *       - contact-message
 *     summary: Delete a single post by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: Successfully deleted post by ID
 *       "404":
 *         description: Post not found
 *       "400":
 *         description: Bad request
 */

//Delete by ID Method
router.delete("/delete/:id", UserController.authenticat, async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
