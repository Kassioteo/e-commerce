const { ServiceLogin } = require("../Services");

const register = async ({ body }, res, next) => {
  try {
    const result = await ServiceLogin.register(body);
    if (result.status === false) {
      return res.status(400).json({ message: "email exist" });
    }
    body.data = result;
    next()
  } catch (err) {
    console.log("ControllerLoginError.register: ", err.messsage);
    res.status(500).json({ messageError: err.message });
  }
};

const update = async ({ body }, res) => {
  try {
    const result = await ServiceLogin.update(body.data.id, body);
    res.status(200).json({ status: result });
  } catch (err) {
    console.log("ControllerLoginError.update: ", err);
    res.status(500).json({ messageError: err.message });
  }
};

const del = async ({ body: {data} }, res) => {
  try {
    const result = await ServiceLogin.del(data.id);
      res.status(200).json({ status: result });
  } catch (err) {
    console.log("ControllerLoginError.del: ", err.messsage);
    res.status(500).json({ messageError: err.message });
  }
};

const login = async ({ body }, res, next) => {
  try {
    const result = await ServiceLogin.login(body);
    if (result.status) {
      return res.status(404).json({ message: result.message });
    }
    body.data = result.body;
    next();
  } catch (err) {
    console.log("ControllerLoginError.del: ", err.messsage);
    res.status(500).json({ messageError: err.message });
  }
};

module.exports = {
  register,
  update,
  del,
  login,
};
