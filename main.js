const { app, BrowserWindow, Menu, globalShortcut } = require('electron');
const menu = require('./menu');
const isMac = require('./constants');

let mainWindow;

function createMainWindow() {
    mainWindow = new BrowserWindow({
        title: 'ImageShrink',
        width: 500,
        height: 600,
        icon: `${__dirname}/assets/icons/Icon_256x256.png`,
    })
    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
};

app.on('ready', () => {
    createMainWindow();
    const mainMenu = Menu.buildFromTemplate(menu);
    Menu.setApplicationMenu(mainMenu);
    globalShortcut.register('CmdOrCtrl+R', () => {
        mainWindow.reload();
    });
    globalShortcut.register(isMac ? 'Cmd+Alt+I' : 'Shift+I', () => {
        mainWindow.toggleDevTools();
    });
    mainWindow.on('ready', () => mainWindow = null)
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
});

// app.on('window-all-closed', ()=>{
//     if(process.platform !== 'darwin') app.quit();
// });