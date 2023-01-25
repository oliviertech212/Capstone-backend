import express from "express";
import passport from "passport";
import AdminController from "../controllers/admin";
const securerouter = express.Router();

import { admin, findUserById } from "../middleware/adminaccess";
import UserSignup from "../db_models/User_model";

console.log(admin);

securerouter.post("/admin", AdminController.cereateadmin);

// securerouter.get("/profile/:id", findUserById, admin, (req, res) => {
//   res.json(req.user);
//   console.log(req.user);
// });

securerouter.get("/profile", admin, (req, res) => {
  res.json(req.user);
  console.log(req.user);
});

// securerouter.get(
//   "/profile",
//   (req, res, next) => {
//     UserSignup.findOne({ _id: req.body.userId })
//       .then((user) => {
//         req.user = user;
//         next();
//       })
//       .catch((err) => {
//         res.status(500).json({ message: err });
//       });
//   },
//   admin,
//   (req, res) => {
//     res.json(req.user);
//     console.log("admin found");
//   }
// );
securerouter.get("/admin", AdminController.cereateadmin, (req, res, next) => {
  res.json({
    message: "You made it to the secure route",
    user: req.user,
    token: req.query.secret_token,
  });
});
// securerouter.get("/adminuser", (req, res, next) => {
//   res.json({
//     message: "You made it to the secure route",
//     user: req.user,
//     token: req.query.secret_token,
//   });
// });
export default securerouter;
