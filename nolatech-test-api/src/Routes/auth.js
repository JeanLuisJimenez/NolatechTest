const {
  createUser,
  findUserByUserNameOrEmail,
} = require("../MongoDB/controllers/user");
const passwordHash = require("password-hash");
const jsonwebtoken = require("jsonwebtoken");
const { TOKEN_EXPIRATION, TOKEN_SECRET } = require("../utils/envars");
const { verifyToken, Authorize } = require("../authentication");
const { ROLES } = require("../constants/roles");
const { validateData } = require("../utils/validation");

const Router = require("express").Router();

Router.post(
  "/register",
  [
    validateData({
      username: "string",
      password: "string",
      email: "string",
      firstname: "string",
      lastname: "string",
    }),
  ],
  ({ body }, res) => {
    createUser({
      firstname: body.firstname,
      lastname: body.lastname,
      username: body.username,
      email: body.email,
      password: passwordHash.generate(body.password),
      role: ROLES.EMPLOYEE,
    }).then((response) => res.send(response));
    res.send();
  }
);

Router.post(
  "/login",
  [
    validateData({
      loginCred: "string",
      password: "string",
    }),
  ],
  async ({ body }, res) => {
    const user = await findUserByUserNameOrEmail(body.loginCred);
    if (!user) return res.status(404).send("no-user-found");

    if (!passwordHash.verify(body.password, user.password))
      return res.status(401).send("incorrect-password");

    delete user.password;

    return res.send(
      jsonwebtoken.sign(
        {
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          role: user.role,
          id: user.id,
        },
        TOKEN_SECRET,
        {
          expiresIn: TOKEN_EXPIRATION,
        }
      )
    );
  }
);

module.exports = Router;
