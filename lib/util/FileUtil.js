var fs = require('graceful-fs'),
    mkdirp = require('mkdirp');

function checkFileExist(fileName) {
    return fs.existsSync(fileName);
}

function createDir(dirName) {
    if (checkFileExist(dirName)) {
        return true;
    }
    mkdirp.sync(dirName);
    return true;
}

module.exports = {
    checkFileExist: checkFileExist,
    createDir: createDir
};