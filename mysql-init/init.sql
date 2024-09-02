use libredb;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP 
);

CREATE TABLE genero (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(255) NOT NULL
);

CREATE TABLE diretor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

CREATE TABLE ator (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

CREATE TABLE filme (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    data_lancamento DATE,
    genero_id INT,
    duracao FLOAT,
    diretor_id INT,
    sinopse TEXT,
    classificacao VARCHAR(10),
    idioma VARCHAR(50),
    pais_origem VARCHAR(100),
    url_capa TEXT,
    url_filme TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    avaliacao FLOAT,
    FOREIGN KEY (genero_id) REFERENCES genero(id),
    FOREIGN KEY (diretor_id) REFERENCES diretor(id)
);

CREATE TABLE filmes_atores (
    filme_id INT,
    ator_id INT,
    PRIMARY KEY (filme_id, ator_id),
    FOREIGN KEY (filme_id) REFERENCES filme(id),
    FOREIGN KEY (ator_id) REFERENCES ator(id)
);

