const Promise = require('bluebird');
const Metalsmith = require('metalsmith');
const _ = require('lodash');
const path = require('path');

const loadTemplateMeta = require('./loadTemplateMeta');
const loadTemplateQuestion = require('./loadTemplateQuestion');
const template = require('./template');
const ask = require('./ask');

module.exports = function (templateDir, buildDir, projectConfig) {
    // todo:for debug
    templateDir = '/Users/yedaodao/Documents/growup/es-cli-template-koa-react-spa';
    var templateMeta = loadTemplateMeta(templateDir),
        templateQuestion = loadTemplateQuestion(templateDir),
        allMeta = {
            context: projectConfig
        };
    _.assign(allMeta, {
        meta: templateMeta
    });
    return Metalsmith(buildDir)
        .clean(true)
        .metadata(allMeta)
        .source(path.resolve(templateDir, './template'))
        .destination('./')
        .use(ask(templateQuestion))
        .use(template)
        .build(function (err) {
            if (err) {
                throw err;
            }
        });
};


