const { ModelLogin } = require("../Model");

const register = async (body) => {
    try{
        const {nome,email,senha} = body
        const [result] = await ModelLogin.register(nome,email,senha)
        console.log(result);
        return result
    }catch (err) {
        console.log("ServiceLogin.register: ", err.messsage);
        throw new Error(`SeriveError: ${err}`)
    }
}

module.exports = {
    register
}