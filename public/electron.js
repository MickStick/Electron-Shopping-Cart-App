const { app, BrowserWindow, Menu } = require('electron');
const isDev = require('electron-is-dev');
const path = require("path");

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadURL(
        isDev ? 'http://localhost:3000' : path.join(__dirname, '../build/index.html')
        )
    // win.webContents.openDevTools()

    Menu.setApplicationMenu(null)

    win.on('closed', () => {
        win = null;
    })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})