const isMac = require('./constants');

const menu = [
    ...(isMac ? [{ role: 'appMenu' }] : [])
    ,
    {
        label: 'File',
        submenu: [
            {
                label: 'Quit',
                accelerator: 'CmdOrCtrl+W',
                click: () => app.quit()
            }
        ]
    }
];

module.exports = menu;