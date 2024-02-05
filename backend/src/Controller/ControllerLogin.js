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
    const result = await ServiceLogin.del(params.email);
    if (result) {
      return res.status(200).json({ message: "deletado" });
    }
    return res.status(400).json({message: "not Found"})
  } catch (err) {
    console.log("ControllerLogin.del: ", err.messsage);
    res.status(500).json({ messageError: err.message });
  }
};

const login = async ({ body }, res) => {
  try {
    const result = await ServiceLogin.login(body);
    if(typeof result === "string") {
      return res.status(404).json({message: result})
    }
    return res.status(200).json({ message: "validado", body });
  } catch (err) {
    console.log("ControllerLogin.del: ", err.messsage);
    res.status(500).json({ messageError: err.message });
  }
};


module.exports = {
  register,
  update,
  del,
  login
};
