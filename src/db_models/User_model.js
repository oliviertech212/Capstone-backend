import mongoose from "mongoose";

// use Oauth with google
import findOrCreatePlugin from "mongoose-findorcreate";

const UserSchema = new mongoose.Schema({
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
});

UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

// use findor create as plugin
UserSchema.plugin(findOrCreatePlugin);

const UserSignup = mongoose.model("Signup", UserSchema);

export default UserSignup;
