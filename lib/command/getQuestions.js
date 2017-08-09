var util = require('../util/util');

module.exports = function () {
    return [
        {
            type: 'input',
            name: 'projectName',
            message: 'What\'s your project name?',
            validate: function (value) {
                var pass = value.match(/^\S[^?'"“”\\\/<>|]+$/i);
                if (pass) {
                    return true;
                }
                return 'Please enter a valid project name';
            }
        },
        {
            type: 'input',
            name: 'author',
            message: 'What\'s your name?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What\'s your email?',
        },
        {
            type: 'list',
            name: 'template',
            message: 'Which template do you need?',
            choices: util.getTemplatesList(),
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license do you need?',
            choices: util.getLicenseList(),
        },
        {
            type: 'input',
            name: 'gitRepo',
            message: 'Input your git repository url(optional)',
        },
    ];
};
