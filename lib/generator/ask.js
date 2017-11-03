const inquirer = require('inquirer');
const _ = require('lodash');

module.exports = function (questions) {
    return function (files, metalsmith, next) {
        var metadata = metalsmith.metadata();
        inquirer.prompt(questions)
            .then(function (answers) {
                _.forEach(answers, function (value, key) {
                    _.set(metadata, ['meta', key], value);
                });
                next();
            });
    }
};