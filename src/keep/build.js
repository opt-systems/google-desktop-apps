var nativefier = require('nativefier').default;
const fs = require('fs');
const path = require('path');


var opt = {
    name: 'Keep',
    targetUrl: 'https://keep.google.com',
    version: '1.0.0',
    out: './dist',
    overwrite: true,
    width: 1200,
    height: 900,
    icon: path.join(__dirname, 'icon.png'),
    tray: false,
    fastQuit: true,
    userAgent: 'auto'
};

nativefier(opt, function (error, appPath) {
    if (error) {
        console.error(error);
        return;
    }

    console.log(opt.name + ' has been nativefied to', appPath);
});