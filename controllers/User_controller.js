import User from "../db_models/User_model";

class UserController {
  static async createUser(req, res) {
    try {
      const data = new User({
        username: req.body.username,
        email: req.body.password,
      });
      await data.save();
      successRes(res, {
        posts: [{ id: 1, title: "A blog post", body: "Some useful content" }],
      });

      //   res.status(201).json(data);
      //   console.log("User saved");
    } catch (error) {
      res.status(401).json(error.message);
      console.log("it can not create user");
    }
  }

  static async getUser(req, res) {
    try {
      const users = await User.find();
      res.status(201).json(users);
    } catch (error) {
      res.status(401).json(error.message);
      console.log("it can not find user");
    }
  }

  static async getOne(req, res) {
    try {
      const id = req.params.id;
      const user = await User.findOne({ id });
      res.status(201).json(user);
    } catch (error) {
      res.status(401).json(error.message);
      console.log("it can not find user");
    }
  }
}

export default UserController;
