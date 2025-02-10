const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../utils/envars");

function verifyToken(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, TOKEN_SECRET);
    req.decodedUser = decoded;
    next();
  } catch (e) {
    return res.status(401).send("not-authenticated");
  }
}

function Authorize(reqRoles) {
  return (req, res, next) => {
    if (!reqRoles.includes(req.decodedUser.role))
      return res.status(403).send("not-authoriced");

    return next();
  };
}

module.exports = {
  verifyToken,
  Authorize,
};
