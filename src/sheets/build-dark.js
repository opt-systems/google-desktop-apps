var nativefier = require('nativefier').default;
const fs = require('fs');
const path = require('path');

var opt = {
    name: 'Sheets Dark',
    targetUrl: 'https://docs.google.com/spreadsheets',
    version: '1.0.0',
    out: './dist',
    overwrite: true,
    width: 1200,
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

    fs.copyFile(path.join(__dirname, '../common/darkreader.js'), './dist/Sheets Dark-darwin-x64/Sheets Dark.app/Contents/Resources/app/inject/darkreader.js', (err) => {
        if (err) throw err;
        console.log('darkreader.js copied');
    });

    // NOTE: siteloading dark reader
    // fs.copyFile(path.join(__dirname, '../common/jquery.min.js'), './dist/Sheets Dark-darwin-x64/Sheets Dark.app/Contents/Resources/app/inject/jquery.min.js', (err) => {
    //     if (err) throw err;
    //     console.log('jquery.min.js copied');
    // });
    // console.log(opt.name + ' has been nativefied to', appPath);
});