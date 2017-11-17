const Promise = require('bluebird');
const Metalsmith = require('metalsmith');
const _ = require('lodash');
const path = require('path');

const loadTemplateMeta = require('./loadTemplateMeta');
const loadTemplateQuestion = require('./loadTemplateQuestion');
const template = require('./template');
const ask = require('./ask');

/**
 * Core function to generate project
 * @param {string} templateDir template project root absolute path
 * @param {string} buildDir destination absolute path
 * @param {object} projectConfig
 * @returns {*}
 */
module.exports = function (templateDir, buildDir, projectConfig) {
    // todo:for debug
    templateDir = '/Users/yedaodao/Documents/growup/es-cli-template-koa';
    // check logic
    if (!_.isString(templateDir) || _.isEmpty(templateDir)) {
        throw new Error('Invalid templateDir');
    }
    if (!_.isString(buildDir) || _.isEmpty(buildDir)) {
        throw new Error('Invalid buildDir');
    }
    if (!_.isPlainObject(projectConfig) || _.isEmpty(_.keys(projectConfig))) {
        throw new Error('Invalid projectConfig');
    }
    return new Promise(function (resolve, reject) {
        var templateMeta = loadTemplateMeta(templateDir),
            templateQuestion = loadTemplateQuestion(templateDir),
            allMeta = {
                context: projectConfig
            };
        _.assign(allMeta, {
            meta: templateMeta
        });
        Metalsmith(buildDir)
            .clean(true)
            .metadata(allMeta)
            .source(path.resolve(templateDir, './template'))
            .destination('./')
            .use(ask(templateQuestion))
            .use(template)
            .build(function (err) {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
    });

};


