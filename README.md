<h1 align="center">Estrutura padrão para criação de aplicações utilizando</h1>
<img src="https://img.shields.io/badge/NODEJS-WORK-green">

# Lista de conteúdos

<!--ts-->

- [Sobre](#sobre)
- [Features](#features)
- [Tecnologias](#tecnologias)
- [Legenda de ícones](#icones)
- [Autor](#autores)
<!--te-->

---

### 💻 Sobre

Estrutura básica para realização de projetos em Node.js, resolvi criar esta base para que meus projetos sigam um padrão de desenvolvimento e junto a ele a busca por uma escalabilidade. De inicio implementarei algumas features relacionadas a permissões de usuários para que ocorra um manuseio interativo ao banco de dados.

---

### Como rodar o projeto
será necessário ter uma versão recente do Node instalada no seu computador junto a ele o Docker para o banco de dados

Rodar os containers do MySQL

```
sudo docker-compose up -d --build local_mysql
```
Intalar as dependências do projeto

```
npm install
```
Após instalar as dependências, rodas as migrations

```
npx prisma migrate dev
```
e após as migrations, rodar os seeders
```
npx prisma db seed
```

### Features
#### Rotas

##### Users

- [x] GET /users  📜
- [x] POST /users 📜
- [x] POST /users/auth 📜


#### Funcionalidades
- [x] Integração com banco de dados  MySQL.
- [x] Registro de usuário.
- [x] Rota de autenticação de usuário.
- [x] Middleware de validação de token e junto a ele as permissões do usuário.


### 🛠 Tecnologias

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [express](https://www.npmjs.com/package/express)
- [typescript](https://www.typescriptlang.org/)
- [ts-node](https://www.npmjs.com/package/ts-node)
- [uuid](https://www.npmjs.com/package/uuid)
- [prisma](https://www.prisma.io/)
- [cors](https://www.npmjs.com/package/cors)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [express-async-errors](https://www.npmjs.com/package/express-async-errors)
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
- [VSCode](https://code.visualstudio.com/)
---

### Legenda de Ícones

- 📚: Significa que a rota ou funcionalidade está documentada e com a documentação atualizada.
- 📜: O pergaminho, nesse contexto, está sendo utilizado para indicar documentação antiga, que precisa ser revisada e ou revisada.
- 🔬: Indica funcionalidades testadas.
---
### Autor

[Enzo Gabriel Pinheiro de Leão](https://www.linkedin.com/in/enzo-le%C3%A3o-976270202/)

Em busca do próximo nível 🚀 - Never stop learning. 🧑‍🎓

<h4 align="center"> 
	🧑‍🔧 Em construção! 🚧
</h4>
