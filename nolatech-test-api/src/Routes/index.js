const Router = require("express").Router();
const Auth = require("./auth");
const Employees = require("./employees");
const Evaluations = require("./evaluations");

Router.use("/auth", Auth);
Router.use("/employees", Employees);
Router.use("/evaluations", Evaluations);

module.exports = Router;
