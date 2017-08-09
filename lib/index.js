var program = require('commander'),
    inquirer = require('inquirer');

var ProjectGenerator = require('./ProjectGenerator');
var getQuestion = require('./command/getQuestions');
var getProjectConfig = require('./command/getProjectConfig');

function InputHandler() {
    this.projectGenerator = null;
}

InputHandler.prototype.initCommand = function (packageJson, processArgv) {
    program.version(packageJson.version);

    program.command('init')
        .description('Starting a ECMAScript project')
        .action(function (cmd) {
            inquirer.prompt(getQuestion())
                .then(function (answers) {
                    this.projectGenerator = new ProjectGenerator(getProjectConfig(answers));
                    this.projectGenerator.generate();
                });
        });

    program.parse(processArgv);
};

module.exports = new InputHandler();
