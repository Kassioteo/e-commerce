const { ModelLogin } = require("../Model");
const { UtilsLogin } = require("../utils");

const register = async (body) => {
  console.log(body);
  try {
    const [result] = await ModelLogin.register(body);;
    return await ModelLogin.getId(result.insertId);;
    
  } catch (err) {
    console.log("ServiceLogin.register: ", err);
    throw new Error(`SeriveError: ${err.message}`);
  }
};

const update = async (id, body) => {
  try {
    await ModelLogin.update(id,body);
  } catch (err) {
    console.log("ServiceLogin.update: ", err);
    throw new Error(`SeriveError: ${err.message}`);
  }
};

const del = async (id) => {
  try {
    const [result] = await ModelLogin.del(id);
    console.log(result.affectedRows);
    if (result.affectedRows !== 0) {
      return true
    }
    return false
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
    console.log(isvalidEmail.body);
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
