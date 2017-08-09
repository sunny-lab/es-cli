var _ = require('lodash');

module.exports = function (inputAnswer) {
    var projectConfig = {
        npm: {},
        git: {},
        basic: {},
        template: {}
    };
    projectConfig.originInput = inputAnswer;
    projectConfig.basic = {
        name: inputAnswer['projectName'],
        author: inputAnswer['author']
    };
    projectConfig.template = {
        name: inputAnswer['template']
    };
    var license = _.get(inputAnswer, ['license'], 'private');
    projectConfig.npm = {
        private: license === 'private',
        license: license
    };
    var gitRepo = inputAnswer['gitRepo'];
    projectConfig.git = {
        hasRepo: !_.isEmpty(gitRepo),
        gitRepo: gitRepo
    };
    return projectConfig;
};
