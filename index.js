const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron/main');
const path = require("node:path");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname,'img/icon/icon.webp'),
        webPreferences: {
            nodeIntegrationInSubFrames: false,
            preload: path.join(__dirname, "preload.js")
        }
    })

    win.loadFile('index.html')
}

ipcMain.handle("dark-mode:toggle", () => {
    if (nativeTheme.shouldUseDarkColors) {
        nativeTheme.themeSource = 'dark'
    } else {
        nativeTheme.themeSource = 'dark'
    }
    return nativeTheme.shouldUseDarkColors
})

ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'system'
})

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})
//app.commandLine.appendSwitch('host-rules', 'MAP * 127.0.0.1');

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})