const inquirer = require('inquirer');

module.exports = function (isExist, questionMsg) {
    if (isExist === false) {
        return true;
    }
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'createDir',
            message: questionMsg,
        }
    ]);
};
