const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Teacher = new Schema({
  name: String,
  email: String
});

module.exports = mongoose.model("Teacher", Teacher);