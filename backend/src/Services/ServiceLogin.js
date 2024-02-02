const { ModelLogin } = require("../Model");

const register = async (body) => {
    const {nome,email,senha} = body
    try{
        const [result] = await ModelLogin.register(nome,email,senha)
        console.log(result);
        return result
    }catch (err) {
        console.log("ServiceLogin.register: ", err);
        throw new Error(`SeriveError: ${err.message}`)
    }
}

module.exports = {
    register
}