import UserSignup from "../db_models/User_model";
import bcrypt from "bcrypt";

class AdminController {
  static async createadmin(req, res) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      // Create a new user
      const newUser = new UserSignup({
        username: req.body.username,
        password: hashedPassword,
        role: "admin",
      });
      //save user to the database
      const savedUser = await newUser.save();
      // for save use
      req.user = savedUser;
      res.status(201).json({ user: savedUser });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getAllUsers(req, res) {
    try {
      const users = await UserSignup.find();
      res.status(200).json({ status: "success", users });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deleteUser(req, res) {
    try {
      const id = req.params.id;

      const result = await UserSignup.deleteOne({ _id: id });

      res
        .status(204)

        .json({ status: "success", deletedCount: result.deletedCount });
      console.log(result.deletedCount);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default AdminController;
