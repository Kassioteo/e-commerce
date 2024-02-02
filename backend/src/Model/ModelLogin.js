const connection = require('./connection')

const register = async(nome, email, senha) => {
    connection.execute(
        `INSERT INTO database (nome, email, senha) VALUES
            (?,?,?);`,
            [nome,email,senha]
    )
}

module.exports = {
    register
}