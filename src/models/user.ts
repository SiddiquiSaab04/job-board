import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
    required: true,
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
    enum: ["user", "admin"],
    default: "user",
  },
})

export default mongoose.model("User", userSchema);