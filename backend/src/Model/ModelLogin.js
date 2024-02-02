const connection = require('./connection')

const register = (nome, email, senha) =>
    connection.execute(
        `INSERT INTO login (nome, email, senha) VALUES
            (?,?,?);`,
            [nome,email,senha]
    )

module.exports = {
    register
}