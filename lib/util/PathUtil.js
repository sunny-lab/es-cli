var path = require('path'),
    userHome = require('user-home');

const processCwd = process.cwd();

function getTemplateDir() {
    return path.join(userHome, '.es-cli-templates');
}

function getTemplatePath(templateName) {
    return path.join(getTemplateDir(), './', templateName);
}

function getProcessCwd() {
    return processCwd;
}

function getCwdDir(dirName) {
    return path.resolve(processCwd, dirName);
}

module.exports = {
    getTemplateDir: getTemplateDir,
    getProcessCwd: getProcessCwd,
    getTemplatePath: getTemplatePath,
    getCwdDir: getCwdDir
};
