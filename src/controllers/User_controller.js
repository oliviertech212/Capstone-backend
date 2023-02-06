import UserSignup from "../db_models/User_model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

class UserController {
  static async signup(req, res) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      // Create a new user
      const newUser = new UserSignup({
        username: req.body.username,
        password: hashedPassword,
      });
      //save user to the database
      const savedUser = await newUser.save();
      req.user = savedUser;

      //  fetch api
      res.set("Content-Type", "application/json");

      res.status(201).json({ user: savedUser });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async login(req, res) {
    try {
      // Find the user in the database
      const user = await UserSignup.findOne({ username: req.body.username });
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }

      // Compare password
      const isMatched = await bcrypt.compare(req.body.password, user.password);
      if (!isMatched) {
        return res.status(401).json({ message: "Incorrect password" });
      }
      // console.log("ismatched", isMatched);
      // If authentication is successful, generate a JWT token
      const token = jwt.sign({ id: user._id }, process.env.MY_SCRET, {
        expiresIn: "1d",
      });
      //       const decoded = jwt.verify(token, process.env.SECRET);
      // expect(decoded.username).to.be.equal("oliviertech27@gmail.com");
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
      // const token = req.headers.token;
      const token = req.headers.authorization.split(" ")[1];
      // Verify the JWT
      const decoded = jwt.verify(token, process.env.MY_SCRET);
      // Find the user by the userId in the JWT's payload
      const user = await UserSignup.findOne({ _id: decoded.id });
      // Send the user's information in the response
      res.send(user);
      // console.log(user);
      // console.log(decoded);
    } catch (error) {
      res.status(401).send({ error: "Unauthorized" });
    }
  };

  static authenticat = (req, res, next) => {
    try {
      // Get the JWT from the request headers
      // const token = req.headers.token;
      const token = req.headers.authorization.split(" ")[1];

      // Verify the JWT
      const decoded = jwt.verify(token, process.env.MY_SCRET);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).send({ error: "Unauthorized" });
    }
  };
}

export default UserController;
