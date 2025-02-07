const employeeModel = require("../models/employee");

function createEmployee(employee) {
  return employeeModel.create(employee);
}

function getEmployees(search) {
  return employeeModel
    .find({
      $or: [
        { firstname: { $regex: search || "", $options: "i" } },
        { lastname: { $regex: search || "", $options: "i" } },
      ],
    })
    .exec();
}

module.exports = {
  createEmployee,
  getEmployees,
};
