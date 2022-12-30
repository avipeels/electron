const { isMac, isDev } = require('./constants');
const {
    createAboutWindow,
} = require('./windowUtils');

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

module.exports = menu;