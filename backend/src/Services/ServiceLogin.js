const { ModelLogin } = require("../Model");
const { UtilsLogin } = require("../utils");

const register = async (body) => {
  try {
    const CorrectLogin = await UtilsLogin.CorrectLogin(body)
    if(CorrectLogin.status === false) {
      return CorrectLogin
    }
    const response = await ModelLogin.register(body);
    const [[result]] = await ModelLogin.getId(response[0].insertId);
    return result
  } catch (err) {
    console.log("ServiceLogin.register: ", err);
    throw new Error(`SeriveError: ${err.message}`);
  }
};

const update = async (id, body) => {
  try {
    const [result] = await ModelLogin.update(id,body);
    return result.affectedRows 
  } catch (err) {
    console.log("ServiceLogin.update: ", err);
    throw new Error(`SeriveError: ${err.message}`);
  }
};

const del = async (id) => {
  try {
    const [result] = await ModelLogin.del(id);
    return result.affectedRows
  } catch (err) {
    console.log("ServiceLogin.del: ", err);
    throw new Error(`SeriveError: ${err.message}`);
  }
};

const login = async (body) => {
  try {
    const CorrectLogin = await UtilsLogin.CorrectLogin(body)
    return CorrectLogin
  } catch (err) {
    console.log("ServiceLogin.del: ", err);
    throw new Error(`SeriveError: ${err.message}`);
  }
};

module.exports = {
  register,
  update,
  del,
  login
};
