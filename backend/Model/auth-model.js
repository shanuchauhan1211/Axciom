
import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, default: " " },
  password: { type: String, required: true, default: "" },
  isAdmin: { type: Boolean, default: false },
});

const UserModel = mongoose.model("Users",UserSchema);

export default UserModel;
