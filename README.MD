# DEMO-electron

Um amigo que trabalha com a infra se deparou com o seguinte problema: existindo vários arquivos .bat e .sh dentro de pastas, que deveriam ser acessados e executados pela equipe de suporte.

No entanto, os arquivos estavam soltos, o que poderia dar margem para o analista clicar no arquivo errado.

Com isso surgiu a necessidade de criar uma interface local que executasse os arquivos não dando acesso direto aos arquivos para sua edição ou ainda, opção de cliques errados.

Partindo desse principio comecei o projeto em Electron que cria uma interface de usuário que lê e executa os arquivos .bat/.sh para evitar a exposição e ainda aumentar a 'distancia' dos arquivos.

----
## TODO

 - [X] executar arquivos .bat
 - [ ] executar arquivos .sh
 - [ ] centralizar todos arquivos em apenas uma pasta
 - [x] estilizar o sistema
 
 #### Feature #1
 - [ ] Ao executar a aplicação, lerá os arquivos da pasta e criará um botão para cada executor.
