const { ServiceLogin } = require("../Services");

const register = async ({ body }, res) => {
  try {
    const newRegister = await ServiceLogin.register(body);
    res.status(200).json({ message: "Registrado", newRegister });
  } catch (err) {
    console.log("ControllerLogin.register: ", err.messsage);
    res.status(500).json({ messageError: err.message });
  }
};

const update = async ({ body, params }, res) => {
  try {
    const update = await ServiceLogin.update(params.email, body);
    res.status(200).json({ message: "atualizado", update });
  } catch (err) {
    console.log("ControllerLogin.register: ", err.messsage);
    res.status(500).json({ messageError: err.message });
  }
};

module.exports = {
  register,
  update
};
