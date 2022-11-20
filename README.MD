O projeto abaixo faz parte de um teste técnico que estou participando.

Desafio

Desenvolver um sistema com um catálogo de veículos a venda.

Front-end

**Stack Base
- React Native

**Regras de negócio
- Página de cadastro informando username e senha
- Página de login informando username e senha
- Ao fazer login, é exibida a lista de carros do usuário e o menu exibe a opção para adicionar um novo carro e fazer logout;
- Cada carro na listagem do usuário terá um botão para editar e outro para deletar;
- Botão para ordenar os veículos:
 
- Listagem com todos os carros a venda ordenada por valor (Menor para o maior) conforme exemplo abaixo:
   
- Barra de filtro:
 
- Menu lateral deve ter as opções de Login, Registro (Similar ao print abaixo):
 

**Form que pode ser usado de exemplo tanto para login quanto para criação de conta
 
-------------------------

Backend

**Stack base
- Servidor utilizando Node.js + Typescript
**Banco de dados PostfreSQL + README de como utilizar

**Arquitetura
**Tabela Users:
- Id -> PK
- Username
- password

**Tabela vehicles:
- Id -> PK
- Name
- Brand
- Model
- Year
- Km
- Color
- City
- Value
- Photo

**Regras de negócio
- Para cadastro dos veículos, deverá ter um login administrativo com token JWT;
- O admin só pode ser acessado se o usuário conseguir se autenticar;
- Todas as requisições privadas precisam de um token válido gerado no login para funcionamento da requisição;
- O cadastro de veículos deverá ter listagem, criação, edição e deleção de registros;
- O backend deverá ser uma API Rest;
- Todos os dados devem ser persistidos no banco de dados;
- Deleção de carro aparece um botão na listagem dos carros do usuário;
- Listagem ocorre ao entrar no perfil do usuário;
- Form para criação e edição de carro similar a tela abaixo:
 
 




