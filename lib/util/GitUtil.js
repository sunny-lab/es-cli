const execSync = require('child_process').execSync;

/**
 * git init
 * @param desDir absolute path
 */
function gitInit(desDir) {
    execSync('git init', {
        cwd: desDir
    });
}

function gitCert(user, email, desDir) {
    execSync('git config user.name ' + user, {
        cwd: desDir
    });
    execSync('git config user.email ' + email, {
        cwd: desDir
    });
}

module.exports = {
    gitInit: gitInit,
    gitCert: gitCert
};