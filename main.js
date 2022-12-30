const { app, BrowserWindow, Menu, globalShortcut } = require('electron');
const { isMac, isDev } = require('./constants');

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

function createAboutWindow() {
    aboutWindow = new BrowserWindow({
        title: 'About Image Shrink',
        width: 300,
        height: 300,
        icon: `${__dirname}/assets/icons/Icon_256x256.png`,
    })
    aboutWindow.loadURL(`file://${__dirname}/app/about.html`);
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

const menu = [
    ...(isMac ? [
        {
            label: 'Shrink',
            submenu: [
                {
                    label: 'About',
                    click: createAboutWindow
                }
            ]
        }
    ] : [])
    ,
    {
        role: 'fileMenu'
    },
    ...(isDev ? [{
        label: 'Developer',
        submenu: [
            {
                role: 'reload'
            },
            {
                role: 'forcereload'
            },
            {
                type: 'separator'
            },
            {
                role: 'toggleDevTools'
            }
        ]
    }] : [])
];

// app.on('window-all-closed', ()=>{
//     if(process.platform !== 'darwin') app.quit();
// });