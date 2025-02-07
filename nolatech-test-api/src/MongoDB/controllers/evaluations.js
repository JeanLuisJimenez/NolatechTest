const evaluations = require("../models/evaluations");

function createEvaluation(evaluation) {
  return evaluations.create(evaluation);
}

function getEvaluation(evalId) {
  return evaluations.findById(evalId).exec();
}

function getEvaluations(employeeId) {
  const query = {};
  if (employeeId) query.employeeId = employeeId;

  return evaluations.find(query).exec();
}

function updateEvaluation(id, evaluation) {
  return evaluations.findByIdAndUpdate(id, evaluation).exec();
}

module.exports = {
  createEvaluation,
  getEvaluation,
  getEvaluations,
  updateEvaluation,
};
