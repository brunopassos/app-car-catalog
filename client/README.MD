[PT-BR / EN]

## [PT-BR]

<h1>App Car Catalog</h1> 

Você pode assistir a uma demonstração clicando [aqui](https://youtu.be/wtwQAAD6iH4) | You can see a demonstration by clicking [here](https://youtu.be/wtwQAAD6iH4)


Status: MVP finalizada - Requer atualizações - Em andamento ⚠️

## Sobre este projeto

Esse é um projeto full stack que faz parte de um teste técnico que estou participando. O objetivo é construir uma aplicação que funciona como um catálogo de carros a venda.

## Instalação 

O que acha de testar a nossa aplicação? Siga os passos abaixo:

+ Instalação do PostgreSQL (LEIA COM ATENÇÃO ANTES DE INICIAR)

    1) Faça o download do PostgreSQL: (https://www.enterprisedb.com/downloads/postgres-postgresql-downloads).
    2) Execute o arquivo de instalação. Durante o processo, salve em um bloco de notas o caminho de onde a aplicação está sendo intalada. Selecione todos os componentes para serem instalados. Crie uma senha de superusuário. Marque a porta 5432 como porta padrão. No final do processo, o instalador deixa uma checkbox marcada que levará para as configurações do mesmo. Por ora desmarque a opção e siga em frente. 

+ Configuração do PostgreSQL

    1) Crie uma variável de ambiente com o caminho que você copiou durante a instalação. Apenas adicione ao final "\bin". Ficará algo parecido com isso: ```C:\Program Files\PostgreSQL\14\bin```.
    2) 


+ Aplicação

    1) Faça o clone da branch ```main``` para o teu computador.
    2) Abra a aplicação na sua IDE de preferência.
    3) O projeto foi dividido em duas pastas: client e server.
    4) Via terminal, acesse a pasta "server": ```cd server/```
    5) No terminal, rode o comando ```yarn``` para instalar todas as dependências.
    6) Execute o comando ```yarn typeorm migration:generate src/migrations/createTables -d src/data-source.ts``` para gerar as migrações.
    7) Execute o comando ```yarn typeorm migration:run -d src/data-source.ts``` para rodar as migrações.
    8) Após a instalação, execute o comando ```yarn dev```
    9) Abra um sergundo terminal, acesse a pasta "client": ```cd client/```
    10) No terminal, rode o comando ```yarn``` para instalar todas as dependências.
    11) Após a instalação, execute o comando ```expo start```
    12) Faça o download no seu celular do aplicativo  "Expo go": (https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www&pli=1)
    13) Abra o App, leia o QR code que apareceu no terminal após executar o comando ```expo start``` e aguarde o download.


## Funcionalidades

- Usuário não logado
  - Tem acesso a todos os veículos que estão cadastrados.

- Registro de usuário
  
- Login

- Usuário logado pode cadastrar um veículo, listar, editar e remover os próprios veículos.


## Stack

+ Frontend

    + React-Native com JavaScript
    + Context Api
    + native-picker
    + navigation/drawer
    + Yup
    + expo-image-picker
    + Hook-form
    + Axios

+ Backend

    + Node.js com TypeScript
    + PostgreSQL
    + Express
    + jsonwebtoken
    + TypeORM
    + uuid
    + Yup


## [EN]
