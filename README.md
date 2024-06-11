# Blogs Api

## Descrição do Projeto

Este é um projeto de uma API para um Blog, além de um banco de dados. Nela, temos um CRUD de postagens com uma camada de autenticação de usuários.

## Tecnologias Usadas

![Docker](https://img.shields.io/badge/Docker-informational?style=flat&logo=docker&logoColor=white&color=blue)
![Sequelize](https://img.shields.io/badge/Sequelize-informational?style=flat&logo=sequelize&logoColor=white&color=blue)
![Javascript](https://img.shields.io/badge/Javascript-informational?style=flat&logo=javascript&logoColor=white&color=blue)
![JWT Token](https://img.shields.io/badge/JWT%20Token-informational?style=flat&logo=json-web-tokens&logoColor=white&color=blue)
![MySQL](https://img.shields.io/badge/MySQL-informational?style=flat&logo=mysql&logoColor=white&color=blue)

## Executando a Aplicação

1. Rode os serviços node e db com o comando:
   ```bash
   docker-compose up -d --build
   ```

2. Acesse o terminal interativo do container:
   ```bash
   docker exec -it blogs_api bash
   ```

3. Instale as dependências com:
   ```bash
   npm install
   ```

5. Iniciando migrations e seeds:
    ```bash
    npm run prestart
    npm run seed
    ```

5. Iniciando a aplicação:
    ```bash
   npm start
   ```

## Gerando Token JWT

Você pode gerar o token de autenticação JWT de duas maneiras diferentes:

### Opção 1: Criando um novo usuário

Para criar um novo usuário e gerar o token de autenticação JWT, você pode enviar uma solicitação POST para a rota `/user` com o seguinte modelo:

```json
{
  "displayName": "NomeCriativo",
  "email": "email@email.com",
  "password": "password"
}
```

### Opção 2: Usando um usuário existente

Você também pode gerar o token de autenticação JWT usando um usuário existente no banco de dados. Basta enviar uma solicitação POST para a rota `/login` com as credenciais de um usuário existente, por exemplo:

```json
{
  "email": "lewishamilton@gmail.com",
  "password": "123456"
}
```
Isso irá gerar o token de autenticação JWT, que você pode então adicionar ao header das requisições para autenticar as solicitações.

## Informações Adicionais
Além das etapas descritas anteriormente, o projeto utiliza Docker Compose para facilitar a execução do ambiente de desenvolvimento. Certifique-se de que o Docker e o Docker Compose estejam instalados em sua máquina antes de prosseguir com as etapas acima.

