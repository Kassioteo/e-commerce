const { ServiceLogin } = require("../Services");

const register = async (req, res) => {
  res.status(200).json({ message: "FROM THE START" });
};

module.exports = {
  register,
};
