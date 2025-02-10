const {Router} = require("express");
const {verifyToken, Authorize} = require("../authentication");
const {ROLES} = require("../constants/roles");
const {getEmployees, getEmployee, updateEmployee} = require("../MongoDB/controllers/employee");

const router = Router();

router.get(
    "/",
    [verifyToken, Authorize([ROLES.ADMIN, ROLES.MANAGER])],
    (req, res) => {
        const {search, page, limit} = req.query;
        getEmployees(page, limit, search).then((resp) => res.send(resp));
    }
);

router.get("/:id",
    [verifyToken, Authorize([ROLES.ADMIN, ROLES.MANAGER])],
    (req, res) => {
        getEmployee(req.params.id).then((resp) => res.send(resp))
    })

router.put('/:id', [verifyToken, Authorize([ROLES.ADMIN, ROLES.MANAGER]), (req, res) => {
    updateEmployee(req.body, req.params.id).then(() => res.send("Successful")).catch(console.log)
}])

module.exports = router;
