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
    await ServiceLogin.update(params.email, body);
    res.status(200).json({ message: "atualizado" });
  } catch (err) {
    console.log("ControllerLogin.update: ", err.messsage);
    res.status(500).json({ messageError: err.message });
  }
};

const del = async ({ params }, res) => {
  try {
    await ServiceLogin.del(params.email);
    res.status(200).json({ message: "deletado" });
  } catch (err) {
    console.log("ControllerLogin.del: ", err.messsage);
    res.status(500).json({ messageError: err.message });
  }
};


module.exports = {
  register,
  update,
  del
};
