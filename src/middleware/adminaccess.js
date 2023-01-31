import UserSignup from "../db_models/User_model";
import jwt from "jsonwebtoken";

export const admin = async (req, res, next) => {
  try {
    // Get the JWT from the request headers
    const token = req.headers.authorization.split(" ")[1];
    // Verify the JWT
    const decoded = jwt.verify(token, process.env.MY_SCRET);

    // Find the user by the userId in the JWT's payload
    const user = await UserSignup.findOne({
      _id: decoded.id,
      role: "admin",
    });

    // console.log("User: ", user);
    // console.log("Decoded: ", decoded);

    if (!user) {
      return res
        .status(401)
        .json({ status: "error", message: "User not found or not admin" });
    }
    // console.log(user, "adminnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
    // console.log(token);

    next();
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};

// const admin = async (req, res, next) => {
//   try {
//     // Get the JWT from the request headers
//     // const token = req.headers.token;
//     const token = req.headers.authorization.split(" ")[1];
//     // Verify the JWT
//     const decoded = jwt.verify(token, process.env.MY_SCRET);

//     console.log("Query: ", { _id: decoded.id, role: "admin" });
//     // Find the user by the userId in the JWT's payload
//     const user = await UserSignup.findOne({
//       _id: decoded.id,
//       // role: { $in: ["admin"] },
//     });
//     res.send(user);

//     console.log("User: ", user);
//     console.log("Decoded: ", decoded);
//     // Send the user's information in the response
//     if (!user) {
//       return res
//         .status(401)
//         .json({ status: "error", message: "only admin allowed" });
//     }
//     console.log(user, token);
//     // req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).send({ error: error.message });
//   }
// };
