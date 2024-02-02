const { ServiceLogin } = require("../Services");

const register = async ({body}, res) => {
  try {
    const result = await ServiceLogin.register(body);
    res.status(200).json({ message: "Registrado" });
  } catch (err) {
    console.log("ControllerLogin.register: ", err.messsage);
    res.status(500).json({ messageError: err.message });
  }
};

module.exports = {
  register,
};
