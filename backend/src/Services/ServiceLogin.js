const { ModelLogin } = require("../Model");
const { UtilsLogin } = require("../utils");

const register = async (body) => {
  try {
    const [result] = await ModelLogin.register(body);
    return { newId: result.insertId, ...body };
  } catch (err) {
    console.log("ServiceLogin.register: ", err);
    throw new Error(`SeriveError: ${err.message}`);
  }
};

const update = async (email, body) => {
  try {
    await ModelLogin.update(email,body);
  } catch (err) {
    console.log("ServiceLogin.update: ", err);
    throw new Error(`SeriveError: ${err.message}`);
  }
};

const del = async (email) => {
  try {
    await ModelLogin.del(email);
  } catch (err) {
    console.log("ServiceLogin.del: ", err);
    throw new Error(`SeriveError: ${err.message}`);
  }
};

const login = async (body) => {
  try {
    const isvalidEmail = await UtilsLogin.validEmail(body.email)
    const isvalidSenha = await UtilsLogin.validEmail(body.senha)
    if(isvalidEmail) {
      return "Email invalido"
    }
    if(isvalidSenha) {
      return "Senha invalido"
    }
    return body
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
