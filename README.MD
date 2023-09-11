# ⚡ Electra Comand Manager⚡ 

Um amigo que trabalha com a infra se deparou com o seguinte problema: atualmente existem vários arquivos executaveis .bat e .sh dentro de pastas, que deveriam ser acessados e executados pela equipe de suporte.

No entanto, os arquivos estavam soltos, o que poderia dar margem para o arquivo ser editado tanto por analistas como por algum terceiro que tivesse acesso aos arquivos.

Com isso surgiu a necessidade de criar uma interface local que executasse os arquivos não dando acesso direto aos arquivos para sua edição.


Partindo desse principio comecei o projeto em Electron que cria uma interface de usuário que lê e executa os arquivos .bat/.sh para evitar a exposição e ainda melhorar a 'disposição' dos arquivos, centralizando tudo em apenas um executável.

----
## Instruções de funcionamento:

### Requisitos:

Para executar o projeto, deve-se ter instalado localmente:

|--- |---
| VSC | [Visual Studio Code](https://code.visualstudio.com)
| NODE | [NodeJS](https://nodejs.org/en)
| GIT | [GIT](https://git-scm.com)

### Preparando ambiente

1. Clone o projeto em sua máquina
2. Dentro da pasta do projeto, no terminal, execute o comando: `npm i` para instalar as dependencias do projeto.

### Executando o projeto:

1. Adicione dentro da pasta do projeto, os arquivos que queira que sejam executados.
2. No arquivo `main.js`, adicione as constantes apontando o local dos arquivos a serem executados.
3. No arquivo `index.html`, copie o botão alterando seu texto e na função handleComand de cada botão adicione o nome da constante que queira chamar.
4. Para validar se está funcionando corretamente, execute no terminal: `npm run start`, que abrirá o projeto em sua forma final e valide se os comandos funcionam corretamente.
5. Crie a build do projeto executando o comando `npm run build` no terminal. Isso fará com que seja criado o arquivo para distribuição. 
---


----
## TODO

 - [X] executar arquivos .bat
 - [x] executar arquivos .sh
 - [x] estilizar o sistema
 - [ ] criar build do projeto.
 - [ ] centralizar todos arquivos em apenas uma pasta - melhoria
 
 #### Ideias de melhorias
 - Ao executar a aplicação, lerá os arquivos da pasta e criará um botão para cada executor.


### Funcionamento:

