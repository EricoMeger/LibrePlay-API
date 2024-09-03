# LibrePlay-API

<p>
API desenvolvida como trabalho para a matéria de Engenharia de Software II do bacharelado em Ciência da Computação no IFPR Campus Pinhais.
</p>

## Requisitos
<p>
Para executar o projeto em sua máquina é necessário ter as seguintes ferramentas instaladas em seu computador:
</p>
<ul>
    <li>Docker</li>
</ul>

## Stacks

Foram utilizadas as seguintes stacks no projeto:

- [Node.js](https://nodejs.org/en/about)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/starter/installing.html)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/)
- [Insomnia](https://insomnia.rest/)

## Como executar o projeto

Clone o repositório para executar a API localmente:

```bash
# Clonando o repositório
$ https://github.com/EricoMeger/LibrePlay-API.git
$ cd LibrePlay-API
```

Na pasta do projeto, rode o seguinte comando para buildar o Docker:

```bash
$ docker compose build
```

Depois de construir a imagem, você pode executar o container com o seguinte comando:

```bash
$ docker compose up
```

Agora, o servidor deve estar rodando na porta 3030 do seu host, e você pode acessar o endpoint /status para checar o funcionamento.

## Rotas

<p>As seguintes rotas estão disponíveis para a API:</p>
<ul>
<li>GET http://localhost:3030/status</li>
<li>POST http://localhost:3030/cadastrar/usuario</li>
<li>POST http://localhost:3030/login/usuario</li>
<li>POST http://localhost:3030/buscar/filme</li>
</ul>

<u>GET</u>: Rota para obter status de funcionamento da API.

<u>POST</u>: Rota para cadastrar usuários e pesquisar filmes no banco.

## Exemplos de uso

### GET - Rota '/status'

#### Saída

```json
{
  "status": "API rodando"
}
```

### POST - Rota '/cadastrar/usuario'

#### Entrada

```json
{
  "user": {
    "name": "nome_teste",
    "email": "email@gmail.com",
    "password": "coxinha123"
  }
}
```

#### Saída

```json
{
  "sucess": true,
  "message": "User registered successfully"
}
```

### POST - Rota '/login/usuario'

#### Entrada

```json
{
  "user": {
    "email": "email@gmail.com",
    "password": "coxinha123"
  }
}
```

#### Saída

```json
{
  "sucess": true,
  "message": "User logged in successfully"
}
```

Exemplo de erro:

```json
{
  "user": {
    "email": "email@gmail.com",
    "password": "senha_errada"
  }
}
```

#### Saída

```json
{
  "sucess": false,
  "message": "Invalid password"
}
```

### POST - Rota '/buscar/filme'

#### Entrada

```json
{
  "filme":{
    "id": 1,
    "titulo": "Inception",
    "data_lancamento": "2010-07-16",
    "duracao": 148,
    "sinopse": "Um ladrão que rouba segredos corporativos...",
    "classificacao": "PG-13",
    "idioma": "Inglês",
    "pais_origem": "EUA",
    "url_capa": "http://example.com/inception.jpg",
    "url_filme": "http://example.com/inception.mp4",
    "created_at": "2024-09-02T23:30:16.000Z",
    "updated_at": "2024-09-02T23:30:16.000Z",
    "avaliacao": 8.8
  }
}
```

#### Saída

```json
{
"sucess": true,
"message": [
    {
      "id": 1,
      "titulo": "Inception",
      "data_lancamento": "2010-07-16",
      "genero_id": 1,
      "duracao": 148,
      "diretor_id": 1,
      "sinopse": "Um ladrão que rouba segredos corporativos...",
      "classificacao": "PG-13",
      "idioma": "Inglês",
      "pais_origem": "EUA",
      "url_capa": "http://example.com/inception.jpg",
      "url_filme": "http://example.com/inception.mp4",
      "created_at": "2024-09-02T23:30:16.000Z",
      "updated_at": "2024-09-02T23:30:16.000Z",
      "avaliacao": 8.8
    }
  ]
}
```

O exemplo acima mostra todas as possibilidades de campos para pesquisa, mas todos esses campos são opcionais.

```json
{
  "filme":{
    "titulo": "Inception"
  }
}
```

#### Saída

```json
{
"sucess": true,
"message": [
    {
      "id": 1,
      "titulo": "Inception",
      "data_lancamento": "2010-07-16",
      "genero_id": 1,
      "duracao": 148,
      "diretor_id": 1,
      "sinopse": "Um ladrão que rouba segredos corporativos...",
      "classificacao": "PG-13",
      "idioma": "Inglês",
      "pais_origem": "EUA",
      "url_capa": "http://example.com/inception.jpg",
      "url_filme": "http://example.com/inception.mp4",
      "created_at": "2024-09-02T23:30:16.000Z",
      "updated_at": "2024-09-02T23:30:16.000Z",
      "avaliacao": 8.8
    }
  ]
}
```

