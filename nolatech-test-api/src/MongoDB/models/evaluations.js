const { Schema, SchemaTypes, model } = require("mongoose");

const evaluationSchema = new Schema({
  employeeId: SchemaTypes.ObjectId,
  performance: Number,
  attendance: Number,
  responsability: Number,
  punctuality: Number,
  respect: Number,
});

module.exports = model("Evaluations", evaluationSchema);
