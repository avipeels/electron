const { isMac, isDev } = require('./constants');

const menu = [
    ...(isMac ? [{ role: 'appMenu' }] : [])
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

module.exports = menu;