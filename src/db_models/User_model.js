import mongoose from "mongoose";

// use Oauth with google
import findOrCreatePlugin from "mongoose-findorcreate";

/**
 * @swagger
 * components:
 *   schemas:
 *     signup:
 *       type: object
 *       required:
 *         -username
 *         -password
 *       properties:
 *         id:
 *           type: string
 *           description: the auto generated id
 *         username:
 *           type: string
 *           default: oliviertech
 *           required: true
 *         password:
 *           type: string
 *           default: oliviertech
 *           required: true
 *         createdAt:
 *            type: string
 *            format: date
 *     Response:
 *       type: object
 *       properties:
 *         _id:
 *            type: string
 *         username:
 *           default: oliviertech
 *           type: string
 *         role:
 *           type: string
 *           default: user
 *         password:
 *           default: oliviertech
 *           type: string
 *         createdAt:
 *           type: string
 */

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: " user",
    },
  },
  { timestamps: true }
);

UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

// use findor create as plugin
UserSchema.plugin(findOrCreatePlugin);

const UserSignup = mongoose.model("Signup", UserSchema);

export default UserSignup;
