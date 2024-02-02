USE database;

CREATE TABLE login (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(25) NOT NULL
);

INSERT INTO login ( nome, email, senha) VALUES
    ("kassio","kassio@gmail.com","ka123"),
    ("polly","polly@gmail.com","po123"),
    ("stevann","stevann@gmail.com","st123"),
    ("teodoro","teodoro@gmail.com","te123"),
    ("vladimir","vladimir@gmail.com","vl123");
