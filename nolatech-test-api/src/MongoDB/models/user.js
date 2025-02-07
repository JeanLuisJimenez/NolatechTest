const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  role: Number,
});

module.exports = model("Users", UserSchema);
