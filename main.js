const { app, BrowserWindow } = require('electron')
const { exec } = require('child_process');

const comand1 = 'comand1.bat'

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

function handleClick() {
  console.log('deu certo')

  exec(comand1, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o arquivo batch: ${error}`);
      return;
    }
    console.log(`Saída padrão do arquivo batch: ${stdout}`);
    console.error(`Saída de erro do arquivo batch: ${stderr}`);
  });
}


// const createElement = function () {
//   // Crie o elemento <div>
//   var divElement = document.createElement("div");

//   // Adicione a classe "btn" ao elemento <div>
//   divElement.classList.add("btn");

//   // Crie o elemento <a> dentro do <div>
//   var linkElement = document.createElement("a");

//   // Defina o atributo "href" do elemento <a>
//   linkElement.setAttribute("href", "#");

//   // Defina o texto do elemento <a>
//   linkElement.textContent = "";

//   // Anexe o elemento <a> ao elemento <div>
//   divElement.appendChild(linkElement);

//   // Agora, o elemento <div> com a estrutura desejada foi criado.
//   // Você pode adicioná-lo ao documento ou fazer qualquer outra operação necessária com ele.

// } 