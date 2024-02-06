const { ServiceLogin } = require("../Services");

const register = async ({ body }, res, next) => {
  try {
    const [[result]] = await ServiceLogin.register(body);
    console.log(result);
    body.data = result
    next()
  } catch (err) {
    console.log("ControllerLogin.register: ", err.messsage);
    res.status(500).json({ messageError: err.message });
  }
};

const update = async ({ body }, res) => {
  console.log(body.data);
  try {
    await ServiceLogin.update(body.data.id, body);
    res.status(200).json({ status: 1 });
  } catch (err) {
    console.log("ControllerLogin.update: ", err);
    res.status(500).json({ messageError: err.message });
  }
};

const del = async ({ body: {data} }, res) => {
  try {
    const result = await ServiceLogin.del(data.id);
    if (result) {
      return res.status(200).json({ status: 1 });
    }
    return res.status(400).json({ message: "not Found" });
  } catch (err) {
    console.log("ControllerLogin.del: ", err.messsage);
    res.status(500).json({ messageError: err.message });
  }
};

const login = async ({ body }, res, next) => {
  try {
    const result = await ServiceLogin.login(body);
    if (typeof result === "string") {
      return res.status(404).json({ message: result });
    }
    body.data = result;
    console.log("controller", body);
    next();
  } catch (err) {
    console.log("ControllerLogin.del: ", err.messsage);
    res.status(500).json({ messageError: err.message });
  }
};

module.exports = {
  register,
  update,
  del,
  login,
};
