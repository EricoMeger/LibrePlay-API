# LibrePlay-API

## Docker

Para construir a imagem Docker do projeto, execute o seguinte comando:

```bash
docker build -t libreplay .
```

Depois de construir a imagem, você pode executar o container com o seguinte comando:

```bash
docker run -p 3030:3030 libreplay
```

Agora, o servidor deve estar rodando na porta 3030 do seu host, e você pode acessar o endpoint /status para checar o funcionamento.