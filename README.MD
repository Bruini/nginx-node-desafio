# Desafio Nginx com Node.js do curso FullCycle 

O objetivo desse desafio é gerar um docker-compose com uma aplicação em **Node.js** que se conecta com o **Mysql** e utilizando o **Nginx*** como proxy reverso.
Ao rodar o comando ```docker-compose up -d```, tudo deverá estar funcionando e disponível na porta: **8080**.

Quando um usuário acessar o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

```
<h1>Full Cycle Rocks!</h1>
```

Seguido da lista de nomes cadastrada no banco de dados.
