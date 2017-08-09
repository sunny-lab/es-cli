var Promise = require('bluebird'),
    downloadGitRepo = require('download-git-repo'),
    ora = require('ora'),
    path = require('path');

var util = require('./util/util'),
    PathUtil = require('./util/PathUtil'),
    FileUtil = require('./util/FileUtil'),
    logger = require('./logger');

module.exports = function (templateName) {
    var templateUrlMap = util.getTemplateUrlMap(),
        templateUrl = templateUrlMap[templateName];
    if (!templateUrl) {
        throw new Error('Invalid template name');
    }
    return new Promise(function (resolve, reject) {
        const templateDir = PathUtil.getTemplatePath(templateName);
        var spinner = ora('downloading template: ' + templateName);
        spinner.start();
        FileUtil.createDir(templateDir);
        downloadGitRepo(templateUrl, templateDir, {clone: false}, function (err) {
            spinner.stop();
            if (err) {
                logger.fatal(err);
                reject(err);
            }
            logger.success('Downloaded template: ' + templateName);
            resolve();
        });
    });
};
