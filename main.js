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

function handleClick(){
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