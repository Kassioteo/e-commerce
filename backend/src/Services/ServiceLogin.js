const { ModelLogin } = require("../Model");

const register = async (body) => {
  const { nome, email, senha } = body;
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
    return
  } catch (err) {
    console.log("ServiceLogin.update: ", err);
    throw new Error(`SeriveError: ${err.message}`);
  }
};

const del = async (email) => {
  try {
    await ModelLogin.del(email);
    return
  } catch (err) {
    console.log("ServiceLogin.del: ", err);
    throw new Error(`SeriveError: ${err.message}`);
  }
};

module.exports = {
  register,
  update,
  del
};
