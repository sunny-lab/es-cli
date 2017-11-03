var chalk = require('chalk');
var format = require('util').format;

var prefix = '   es-cli',
    sep = chalk.gray('·');

exports.log = function () {
    var msg = format.apply(format, arguments);
    console.log(chalk.green(prefix), sep, msg);
};

exports.fatal = function (message) {
    console.error(chalk.red(prefix), message);
};

exports.success = function () {
    var msg = format.apply(format, arguments);
    console.log(chalk.green(prefix), sep, msg);
};
