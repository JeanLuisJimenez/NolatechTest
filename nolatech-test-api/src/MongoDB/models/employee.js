const { model, Schema, SchemaTypes } = require("mongoose");

const employeeSchema = new Schema({
  userId: SchemaTypes.ObjectId,
  firstname: String,
  lastname: String,
});

module.exports = model("Employees", employeeSchema);
