import mongoose from "mongoose";
import role from "../enums/role";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  city : {
    type: String,
    required: false,
  },
  linkedIn:{
    type: String,
    required: false,
  },
  github:{
    type: String,
    required: false,
  },
  portfolio:{
    type: String,
    required: false,
  },
  resume: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    enum: [role.USER, role.ADMIN],
    default: role.USER,
  },
})

export default mongoose.model("User", userSchema);