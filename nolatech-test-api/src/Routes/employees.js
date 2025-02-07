const { Router } = require("express");
const { verifyToken, Authorize } = require("../authentication");
const { ROLES } = require("../constants/roles");
const { getEmployees } = require("../MongoDB/controllers/employee");

const router = Router();

router.get(
  "/",
  [verifyToken, Authorize([ROLES.ADMIN, ROLES.MANAGER])],
  (req, res) => {
    const { search } = req.query;
    getEmployees(search).then((resp) => res.send(resp));
  }
);

module.exports = router;
