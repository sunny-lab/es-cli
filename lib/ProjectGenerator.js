var FileUtil = require('./util/FileUtil'),
    PathUtil = require('./util/PathUtil'),
    downloadTemplate = require('./downloadTemplate');

function ProjectGenerator(projectConfig) {
    this.projectConfig = projectConfig;
}

ProjectGenerator.prototype.createDir = function () {

};

ProjectGenerator.prototype.handleTemplate = function () {

};

ProjectGenerator.prototype.generate = function () {
    var templateName = this.projectConfig.template.name,
        templatePath = PathUtil.getTemplatePath(templateName);
    if (!FileUtil.checkFileExist(templatePath)) {
        downloadTemplate(templateName)
            .then();
    }
};

module.exports = ProjectGenerator;

