// importando os modulos app e browserwindow do Electron
const { app, BrowserWindow } = require('electron')


//define a função createwindow que é responsável cria uma nova janela do aplicativo electron
const createWindow = () => {
//cria uma nova instãncia do browserwindow com as dimensões especificadas 
  const win = new BrowserWindow({
    width: 800, // define a largura da janela
    height: 600 // define a altura da janela
  })

  //carrega o arquivo index.html na janela criada
  win.loadFile('index.html')
}

//quando aplicativo estiver pronto, chama a função createwindow para criar a janela principal
app.whenReady().then(() => {
//executa a função createwindow para criar a janela principal
  createWindow()
})