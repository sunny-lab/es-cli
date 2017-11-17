const _ = require('lodash');

const FileUtil = require('./util/FileUtil'),
    PathUtil = require('./util/PathUtil'),
    downloadTemplate = require('./util/downloadTemplate'),
    logger = require('./logger'),
    generator = require('./generator'),
    GitUtil = require('./util/GitUtil');

function ProjectGenerator(projectConfig) {
    this.projectConfig = projectConfig;
    this.templateDir = null;
    this.buildDir = null;
}

/**
 * create build directory
 */
ProjectGenerator.prototype.createDir = function () {
    const dirName = PathUtil.getCwdDir(this.projectConfig.basic.name);
    // TODO add dir is exist
    // let dirIsExist = FileUtil.checkFileExist(dirName);
    FileUtil.syncCreateDir(dirName);
    logger.log('Directory ' + dirName + ' is created');
    return dirName;
};

/**
 * handle template & generate project
 * @param buildDir
 * @returns {Promise}
 */
ProjectGenerator.prototype.handleTemplate = function (buildDir) {
    return generator(this.templateDir, buildDir, this.projectConfig);
};


/**
 * init git in generated project directory
 */
ProjectGenerator.prototype.initGit = function () {
    GitUtil.gitInit(this.buildDir);
    GitUtil.gitCert(
        _.get(this.projectConfig, ['basic', 'author']),
        _.get(this.projectConfig, ['basic', 'email']),
        this.buildDir
    );
};

/**
 * main function
 * @returns {Promise}
 */
ProjectGenerator.prototype.generate = function () {
    var templateName = this.projectConfig.template.name;
    const self = this;
    return downloadTemplate(templateName)
        .then(function (templateDir) {
            self.templateDir = templateDir;
            return self.createDir();
        })
        .then(function (buildDir) {
            self.buildDir = buildDir;
            return self.handleTemplate(buildDir);
        })
        .then(function () {
            return self.initGit();
        })
        .catch(function (err) {
            logger.fatal(err);
        });
};

module.exports = ProjectGenerator;

