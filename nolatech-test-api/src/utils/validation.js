function validateData(body = {}) {
  return (req, res, next) => {
    let invalidMessage = "";

    Object.keys(body).forEach((key) => {
      if (
        !(
          typeof req.body[key] === body[key] ||
          body[key].includes(typeof req.body[key])
        )
      )
        invalidMessage += `The field '${key}' type should be one of '${
          body[key]
        }' instead of '${typeof req.body[key]}'\n`;

      if (typeof req.body[key] === "string" && !req.body[key])
        invalidMessage += `The field '${key}' type should not be blank'\n`;
    });

    if (invalidMessage)
      return res
        .status(400)
        .send({ error: "invalid-data", message: invalidMessage });

    next();
  };
}

module.exports = {
  validateData,
};
