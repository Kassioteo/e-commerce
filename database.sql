USE database;

CREATE TABLE clientes (
    id_cliente INT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(25) NOT NULL,
    id_endereco INT,
    telefone_celular VARCHAR(25),
        CONSTRAINT PRIMARY KEY(id_cliente)
);

-- CREATE TABLE compras_efetuadas ()

INSERT INTO cliente ( nome, email, senha) VALUES
    ("kassio","kassio@gmail.com","ka123"),
    ("polly","polly@gmail.com","po123"),
    ("stevann","stevann@gmail.com","st123"),
    ("teodoro","teodoro@gmail.com","te123"),
    ("vladimir","vladimir@gmail.com","vl123");

CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(150) NOT NULL,
    valor INT NOT NULL,
    categoria VARCHAR(80) NOT NULL,
    descricao VARCHAR(250) NOT NULL,
)

-- CREATE TABLE estoque () 

-- CREATE TABLE avaliacoes ()

-- CREATE TABLE recomendacoes () 

-- INSERT INTO products (nome, valor, categoria, descricao, estoque) VALUES
--     ("celular")
