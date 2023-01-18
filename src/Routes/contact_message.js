import Express from "express";
import mongoose from "mongoose";
import User from "../db_models/contact_message";
import { Model } from "mongoose";
import { contactValidation } from "../middleware/contact_validation";

const router = Express.Router();

router.post("/post", contactValidation, async (req, res) => {
  try {
    const data = new User({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    await data.save();
    res.status(201).json(data);
    console.log("msg sent sussfuly");
  } catch (error) {
    res.status(401).json(error.message);
    console.log("it can not create user");
  }
});

router.get("/getall", async (req, res) => {
  try {
    const Users = await User.find();
    res.status(200).json(Users);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/update/:id", contactValidation, async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await User.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
