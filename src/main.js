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
        width: 320,
        height: 240,
        useContentSize: true,
        resizable: false,
        maximizable: false,
        minimizable: true,
        titleBarStyle: 'hidden',
        frame: false,
        fullscreenable: false,
        icon: path.join(__dirname, 'src', 'icon.png'),
        webPreferences: {
            preload: path.join(__dirname, 'src', 'renderer.js')
        }
    });
    win.setMenuBarVisibility(false); // скрывает меню
    win.removeMenu();                // удаляет полностью (для надёжности)


    win.loadFile('src/index.html');
}

app.whenReady().then(createWindow);
