 const jwt = require("jsonwebtoken");


 // Generate JWT
 const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_PASS, {
    expiresIn: "14d",
  });
};
module.exports = generateToken;
