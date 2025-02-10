const {Authorize, verifyToken} = require("../authentication");
const {ROLES} = require("../constants/roles");
const {
    createEvaluation,
    getEvaluation,
    updateEvaluation,
    getEvaluations,
} = require("../MongoDB/controllers/evaluations");
const employee = require("../MongoDB/models/employee");
const {validateData} = require("../utils/validation");

const Router = require("express").Router();

Router.post(
    "/",
    [
        verifyToken,
        Authorize([ROLES.ADMIN, ROLES.MANAGER]),
        validateData({
            employeeId: "string",
            performance: "number",
            attendance: "number",
            responsability: "number",
            punctuality: "number",
            respect: "number",
        }),
    ],
    (req, res) => {
        const eval = req.body;

        createEvaluation({
            employeeId: eval.employeeId,
            performance: eval.performance,
            attendance: eval.attendance,
            responsability: eval.responsability,
            punctuality: eval.punctuality,
            respect: eval.respect,
        }).then((resp) => res.send(resp));
    }
);

Router.get(
    "/employee/:employee",
    [verifyToken, Authorize([ROLES.ADMIN, ROLES.MANAGER])],
    (req, res) => {
        const {employee} = req.params;

        getEvaluations(employee).then((resp) => res.send(resp));
    }
);

Router.get(
    "/:id",
    [verifyToken, Authorize([ROLES.ADMIN, ROLES.MANAGER])],
    (req, res) => {
        const {id} = req.params;

        getEvaluation(id).then((resp) => res.send(resp));
    }
);

Router.put(
    "/:id",
    [
        verifyToken,
        Authorize([ROLES.ADMIN, ROLES.MANAGER]),
        validateData({
            employeeId: ["string", "undefined"],
            performance: ["number", "undefined"],
            attendance: ["number", "undefined"],
            responsability: ["number", "undefined"],
            punctuality: ["number", "undefined"],
            respect: ["number", "undefined"],
        }),
    ],
    (req, res) => {
        const {id} = req.params;
        const eval = req.body;

        updateEvaluation(id, {
            performance: eval.performance,
            attendance: eval.attendance,
            responsability: eval.responsability,
            punctuality: eval.punctuality,
            respect: eval.respect,
        }).then((resp) => res.send(resp));
    }
);

module.exports = Router;
