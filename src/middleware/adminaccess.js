import UserSignup from "../db_models/User_model";

export const admin = async (req, res, next) => {
  try {
    const user = await UserSignup.find({
      // _id: req.user._id,
      // _id: req.newUser._id,
      role: "admin",
    });
    req.user = user;
    console.log(user);
    if (!user) {
      return res
        .status(401)
        .json({ status: "error", message: "only admin allowed" });
    }
    // req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// export const findUserById = async (req, res, next) => {
//   try {
//     const user = await UserSignup.findById(req.params.id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
