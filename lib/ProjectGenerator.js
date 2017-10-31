const FileUtil = require('./util/FileUtil'),
    PathUtil = require('./util/PathUtil'),
    downloadTemplate = require('./downloadTemplate'),
    logger = require('./logger'),
    existQuestion = require('./interact/existQuestion'),
    generator = require('./generator');

function ProjectGenerator(projectConfig) {
    this.projectConfig = projectConfig;
    this.templateDir = null;
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
            return self.handleTemplate(buildDir);
        })
        .catch(function (err) {
            logger.fatal(err);
        });
};

module.exports = ProjectGenerator;

