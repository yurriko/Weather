const { app, BrowserWindow } = require('electron');
const path = require('path');

const { ipcMain } = require('electron');

ipcMain.on('window-minimize', () => {
    const win = BrowserWindow.getFocusedWindow();
    if (win) win.minimize();
});

ipcMain.on('window-close', () => {
    const win = BrowserWindow.getFocusedWindow();
    if (win) win.close();
});


function createWindow () {
    const win = new BrowserWindow({
        width: 340,
        height: 380,
        minWidth: 340,
        minHeight: 380,
        maxWidth: 340,
        maxHeight: 380,
        useContentSize: true,
        resizable: false,
        maximizable: false,
        minimizable: true,
        titleBarStyle: 'hidden',
        frame: false,
        fullscreenable: false,
        icon: path.join(__dirname, 'src', 'icon1.png'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
        }
    });

    win.setMenuBarVisibility(false);
    win.removeMenu();

    win.loadFile('src/index.html');
}


app.whenReady().then(createWindow);
