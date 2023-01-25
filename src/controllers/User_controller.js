import User from "../db_models/User_model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

class UserController {
  // static async createUser(req, res) {
  //   try {
  //     const data = new User({
  //       username: req.body.username,
  //       password: req.body.password,
  //     });
  //     await data.save();
  //     successRes(res, {
  //       posts: [{ id: 1, title: "A blog post", body: "Some useful content" }],
  //     });

  //     //   res.status(201).json(data);
  //     //   console.log("User saved");
  //   } catch (error) {
  //     res.status(401).json(error.message);
  //     console.log("it can not create user");
  //   }
  // }
  static async signup(req, res) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      // Create a new user
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      //save user to the database
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async login(req, res) {
    try {
      // Find the user in the database
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }

      // Compare password
      const isMatched = await bcrypt.compare(req.body.password, user.password);
      if (!isMatched) {
        return res.status(401).json({ message: "Incorrect password" });
      }
      console.log("ismatched", isMatched);
      // If authentication is successful, generate a JWT token
      const token = jwt.sign({ id: user._id }, process.env.MY_SCRET, {
        expiresIn: "1d",
      });

      return res.json({
        auth: true,
        token,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Example of a protected route that requires authentication and authorization
  // Example of a protected route that requires authentication and authorization
  static getProfile = async (req, res) => {
    try {
      // Get the JWT from the request headers
      const token = req.headers.authorization;
      // Verify the JWT
      const decoded = jwt.verify(token, process.env.MY_SCRET);
      // Find the user by the userId in the JWT's payload
      const user = await User.findOne({ _id: decoded.id });
      // Send the user's information in the response
      res.send(user);
      console.log(decoded);
    } catch (error) {
      res.status(401).send({ error: "Unauthorized" });
    }
  };

  static authenticat = (req, res, next) => {
    try {
      // Get the JWT from the request headers
      const token = req.headers.authorization;
      // Verify the JWT
      const decoded = jwt.verify(token, process.env.MY_SCRET);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).send({ error: "Unauthorized" });
    }
  };

  // Only authenticated users with a valid JWT token can access this route
  static async authenticate(req, res, next) {
    // Get the token from the header
    const token = req.headers.authorization;

    // Check if token is present
    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    // Verify the token
    try {
      const decoded = jwt.verify(token, process.env.MY_SCRET);
      req.user = decoded;
      const user = await User.findOne({ _id: decoded.id });
      // Send the user's information in the response
      res.send(user);
      next();
      console.log(decoded);
    } catch (error) {
      return res.status(400).json({ message: "Invalid token." });
    }
  }

  // static async getUser(req, res) {
  //   try {
  //     const users = await User.find();
  //     res.status(201).json(users);
  //   } catch (error) {
  //     res.status(401).json(error.message);
  //     console.log("it can not find user");
  //   }
  // }

  // static async getOne(req, res) {
  //   try {
  //     const id = req.params.id;
  //     const user = await User.findOne({ id });
  //     res.status(201).json(user);
  //   } catch (error) {
  //     res.status(401).json(error.message);
  //     console.log("it can not find user");
  //   }
  // }
}

export default UserController;
