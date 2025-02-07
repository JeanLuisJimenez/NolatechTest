const user = require("../models/user");
const { createEmployee } = require("./employee");

function createUser(userData) {
  return user
    .create({
      email: userData.email,
      password: userData.password,
      role: userData.role,
      username: userData.username,
    })
    .then(async (user) => {
      return {
        employee: await createEmployee({
          userId: user.id,
          firstname: userData.firstname,
          lastname: userData.lastname,
        }),
        user,
      };
    });
}

function findUserByUserNameOrEmail(loginCred) {
  return user
    .findOne({ $or: [{ email: loginCred }, { username: loginCred }] })
    .exec();
}

module.exports = {
  createUser,
  findUserByUserNameOrEmail,
};
