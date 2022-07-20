# Esporte na Rede :basketball:	:globe_with_meridians:
Projeto Livre para Conclusão de Curso de Desenvolvimento Back-end - Reprograma

### Olá, meu nome é Bárbara :rainbow:	

Tenho 29 anos, moro em Florianópolis - SC, sou formada em Educação Física - Bacharelado pela Universidade Federal de Santa Catarina e no momento estou em transição de carreira, cursando desenvolvimento back-end na {reprograma}. Abaixo falarei mais sobre o projeto!

<br>

### Sobre o projeto: Esporte na Rede :softball:	

Como Profissional de Educação Física e instutora de iniciação esportiva há 4 anos, sei da importância do esporte na vida de crianças e adolescentes, tanto para lazer e saúde quanto para sua formação educacional, e também sei que indivíduos de baixa renda muitas vezes tem pouco acesso à clubes de formação esportiva, pois a maioria custa caro.

Com o objetivo de democratizar e facilitar o acesso de jovens a prática esportiva focada em saúde e lazer, esta API permitirá o cadastro de projetos sociais esportivos da região da Grande Florianópolis, para que os interessados consigam encontrar em um só lugar as informações sobre os projetos.

<br>

### Funcionalidades :soccer:

- [x] No schema dos projetos deve constar os seguintes campos: id(autogerado), nome, contato, local, regiao, vagasDisponiveis, diasDaSemana, modalidades, idades
- [x] A API deve permitir o cadastro de projetos sociais esportivos
- [x] A API deve permitir a visualização dos projetos 
- [x] A API deve permitir a alteração de dados dos projetos 
- [x] A API deve permitir a exclusão dos projetos do banco de dados

<br>

### Rotas :volleyball:

| Rotas - Projetos              | Funções                                       |
|-------------------------------|---------------------------------------------- |    
| GET/projetos                  | Acesso a todos os projetos                    |
| GET/projeto/:id               | Acesso ao projeto pelo id                     |
| GET/projetos/regiao           | Acesso aos projetos por regiao                |
| GET/projetos/modalidade       | Acesso aos projetos por modalidade esportiva  |
| POST/projeto                  | Cadastro de novo projeto                      |
| PATCH/atualizar/:id           | Alteração de dados do projeto                 |
| DELETE/remover/:id            | Exclusão do projeto do banco de dados         |

<br>

### Tecnologias e pacotes utilizados :hammer_and_wrench:

- JavaScript
- Node.js
- Git
- MongoDB
- Heroku
- Swagger
- express
- nodemon
- dotenv-safe
- cors
- bcrypt
- jwt
- mongoose

## Arquitetura MVC

  📁 PROJETO-LIVRE-ESPORTE-NA-REDE 
  | 
  |-  📁 node_modules 
  |
  |-  📁 swagger 
  |    |- 📄 swagger_output.json
  |
  |-  📁 src 
  |    |
  |    |- 📁 database  
  |         |- 📄 mongooseConnect.js  
  |
  |    |- 📁 controller  
  |         |- 📄 projetosController.js    
  |  
  |    |- 📁 models 
  |         |- 📄 projetosModel.js   
  |  
  |    |- 📁 routes  
  |         |- 📄 index.js   
  |         |- 📄 projetosRoutes.js 
  |
  |
  |    |- 📄 app.js 
  |
  |- 📄 Procfile 
  |- 📄 swagger.js 
  |- 📄 .env 
  |- 📄 .env.example 
  |- 📄 .gitignore 
  |- 📄 package-lock.json  
  |- 📄 package.json 
  |- 📄 README.md  
  |- 📄 server.js  

<br>

### Contato

<a href="https://www.linkedin.com/in/barbaracostabaron"><img src="https://cdn-icons-png.flaticon.com/512/408/408703.png?w=740" align="left" height="32" width="32" ></a>

<a href="https://www.instagram.com/babixbaron"><img src="https://cdn-icons-png.flaticon.com/512/1216/1216753.png?w=740" align="left" height="32" width="32" ></a>



