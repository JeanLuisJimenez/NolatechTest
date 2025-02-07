const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  TOKEN_EXPIRATION: process.env.TOKEN_EXPIRATION,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
};
