const { app, BrowserWindow } = require('electron')
const { exec } = require('child_process');

// arquivo direcionado
const comand1 = 'comand1.bat'
const nova = 'comand2.bat'


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


// função que executa o arquivo
function handleClick(comandName) {
  exec(comandName, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o arquivo batch: ${error}`);
      return;
    }
  });
}