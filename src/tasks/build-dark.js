var nativefier = require('nativefier').default;
const fs = require('fs');
const path = require('path');

var opt = {
    name: 'Tasks Dark',
    targetUrl: 'https://tasks.google.com/embed/?origin=https://calendar.google.com&fullWidth=1',
    version: '1.0.0',
    out: './dist',
    overwrite: true,
    width: 720,
    height: 900,
    icon: path.join(__dirname, 'icon.png'),
    inject: [path.join(__dirname, 'script.js')],
    tray: false,
    fastQuit: true,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; rv:83.0) Gecko/20100101 Firefox/83.0',
    internalUrls: '.*?\.google\.*?',
    electronVersion: '10.1.6',
    //clearCache: true,
};

nativefier(opt, function (error, appPath) {
    if (error) {
        console.error(error);
        return;
    }

    fs.copyFile(path.join(__dirname, '../common/darkreader.js'), './dist/Tasks Dark-darwin-x64/Tasks Dark.app/Contents/Resources/app/inject/darkreader.js', (err) => {
        if (err) throw err;
        console.log('darkreader.js copied');
    });

    console.log(opt.name + ' has been nativefied to', appPath);
});