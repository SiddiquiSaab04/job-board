import mongoose from "mongoose";
import location from "../enums/location";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    enum: [location.REMOTE, location.ON_SITE, location.HYBRID],
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  postedBy: {
    type: String,
    required: false,
  },
});

const Jobs = mongoose.model("Jobs", jobSchema);
export default Jobs;
