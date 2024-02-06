const { ModelLogin } = require("../Model");

const ExistEmail = async (email) => {
  const [result] = await ModelLogin.getEmail(email);
  if (result.length === 0) {
    return {status: true};
  }
  return {status: false, body: result[0]};
};

const ExistClient = async (client) => {
  const {status, body} = await ExistEmail(client.email)
  if (status) {
    return {status: true, message: "Email invalid"};
  }
  if (!body.senha === client.senha) {
    return {status: true, message: "Senha invalid"};
  }
  return {status: false, body };
};


module.exports = {
    ExistClient
}