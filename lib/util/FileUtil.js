var fs = require('graceful-fs'),
    mkdirp = require('mkdirp');

function checkFileExist(fileName) {
    return fs.existsSync(fileName);
}

function syncCreateDir(dirName) {
    if (checkFileExist(dirName)) {
        return true;
    }
    mkdirp.sync(dirName);
    return true;
}

module.exports = {
    checkFileExist: checkFileExist,
    syncCreateDir: syncCreateDir
};