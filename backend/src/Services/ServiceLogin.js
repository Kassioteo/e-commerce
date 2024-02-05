const { ModelLogin } = require("../Model");
const { UtilsLogin } = require("../utils");
const { newToken } = require("../utils/JWT");

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
    const isvalidSenha = await UtilsLogin.validSenha(body.senha)
    if(isvalidEmail.status) {
      return "Email invalido"
    }
    if(isvalidSenha.status) {
      return "Senha invalido"
    }
    // console.log(newToken(body));
    return isvalidEmail.body
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
