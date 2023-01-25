"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _User_model = _interopRequireDefault(require("../db_models/User_model"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
      const salt = await _bcrypt.default.genSalt(10);
      const hashedPassword = await _bcrypt.default.hash(req.body.password, salt);
      // Create a new user
      const newUser = new _User_model.default({
        username: req.body.username,
        password: hashedPassword
      });
      //save user to the database
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  }
  static async login(req, res) {
    try {
      // Find the user in the database
      const user = await _User_model.default.findOne({
        username: req.body.username
      });
      if (!user) {
        return res.status(401).json({
          message: "User not found"
        });
      }

      // Compare password
      const isMatched = await _bcrypt.default.compare(req.body.password, user.password);
      if (!isMatched) {
        return res.status(401).json({
          message: "Incorrect password"
        });
      }
      console.log("ismatched", isMatched);
      // If authentication is successful, generate a JWT token
      const token = _jsonwebtoken.default.sign({
        id: user._id
      }, process.env.MY_SCRET, {
        expiresIn: "1d"
      });
      return res.json({
        auth: true,
        token
      });
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  }

  // Example of a protected route that requires authentication and authorization
  // Example of a protected route that requires authentication and authorization

  // Only authenticated users with a valid JWT token can access this route
  static async authenticate(req, res, next) {
    // Get the token from the header
    const token = req.headers.authorization;

    // Check if token is present
    if (!token) {
      return res.status(401).json({
        message: "Access denied. No token provided."
      });
    }

    // Verify the token
    try {
      const decoded = _jsonwebtoken.default.verify(token, process.env.MY_SCRET);
      req.user = decoded;
      const user = await _User_model.default.findOne({
        _id: decoded.id
      });
      // Send the user's information in the response
      res.send(user);
      next();
      console.log(decoded);
    } catch (error) {
      return res.status(400).json({
        message: "Invalid token."
      });
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
_defineProperty(UserController, "getProfile", async (req, res) => {
  try {
    // Get the JWT from the request headers
    const token = req.headers.authorization;
    // Verify the JWT
    const decoded = _jsonwebtoken.default.verify(token, process.env.MY_SCRET);
    // Find the user by the userId in the JWT's payload
    const user = await _User_model.default.findOne({
      _id: decoded.id
    });
    // Send the user's information in the response
    res.send(user);
    console.log(decoded);
  } catch (error) {
    res.status(401).send({
      error: "Unauthorized"
    });
  }
});
_defineProperty(UserController, "authenticat", (req, res, next) => {
  try {
    // Get the JWT from the request headers
    const token = req.headers.authorization;
    // Verify the JWT
    const decoded = _jsonwebtoken.default.verify(token, process.env.MY_SCRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send({
      error: "Unauthorized"
    });
  }
});
var _default = UserController;
exports.default = _default;