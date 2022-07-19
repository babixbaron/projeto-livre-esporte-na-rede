# Esportes na Rede :basketball:	:globe_with_meridians:
Projeto Livre para Conclusão de Curso de Desenvolvimento Back-end - Reprograma

## Olá, meu nome é Bárbara :rainbow:	

Tenho 29 anos, moro em Florianópolis - SC, sou formada em Educação Física - Bacharelado pela Universidade Federal de Santa Catarina e no momento estou em transição de carreira, cursando desenvolvimento back-end na {reprograma}. Abaixo falarei mais sobre o projeto!

<br>

## Sobre o projeto: Esportes na Rede

Como Profissional de Educação Física e instutora de iniciação esportiva há 4 anos, sei da importância do esporte na vida de crianças e adolescentes, tanto para lazer e saúde quanto para sua formação educacional, e também sei que indivíduos de baixa renda muitas vezes tem pouco acesso à clubes de formação esportiva, pois a maioria custa caro.

Com o objetivo de democratizar e facilitar o acesso de jovens a prática esportiva focada em saúde e lazer, esta API permitirá o cadastro de projetos sociais esportivos da região da Grande Florianópolis, para que os interessados consigam encontrar em um só lugar as informações sobre os projetos.

<br>

## Funcionalidades :soccer:

- [x] No schema dos projetos deve constar os seguintes campos: id(autogerado), nome, contato, local, regiao, vagasDisponiveis, diasDaSemana, modalidades, idades
- [x] Cadastro de projetos sociais esportivos
- [x] Visualização dos projetos 
- [x] Alteração de dados dos projetos 
- [x] Exclusão dos projetos do banco de dados

<br>

## Rotas :volleyball:

| Rotas Projetos                |                                               |
|-------------------------------|---------------------------------------------- |    
| GET/projetos                  | Acesso a todos os projetos                    |
| GET/projeto/:id               | Acesso ao projeto pelo id                     |
| GET/projetos/regiao           | Acesso aos projetos por regiao                |
| GET/projetos/modalidade       | Acesso aos projetos por modalidade esportiva  |
| POST/projeto                  | Cadastro de novo projeto                      |
| PATCH/atualizar/:id           | Alteração de dados do projeto                 |
| DELETE/remover/:id            | Exclusão do projeto do banco de dados         |

<br>

## Tecnologias utilizadas e pacotes utilizados :hammer_and_wrench:

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


