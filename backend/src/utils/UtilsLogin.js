const { ModelLogin } = require("../Model");

const validEmail = async (email) => {
  const [validEmail] = await ModelLogin.getEmail(email);
  if (validEmail.length === 0) {
    return {status: true};
  }
  return {status: false, body: validEmail};
};

const validSenha = async (senha) => {
  const [validSenha] = await ModelLogin.getSenha(senha);
  if (validSenha.length === 0) {
    return true;
  }
  return false;
};

module.exports = {
    validEmail,
    validSenha
}