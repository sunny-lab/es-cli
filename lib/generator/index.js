const Promise = require('bluebird');
const Metalsmith = require('metalsmith');
const async = require('async');
const render = require('consolidate').twig.render;
const path = require('path');


module.exports = function (templateDir, buildDir, projectConfig) {
    // for debug
    templateDir = '/Users/yedaodao/Documents/growup/es-cli-template-koa-react-spa';
    return Metalsmith(buildDir)
        .metadata({
            context: projectConfig
        })
        .source(path.resolve(templateDir, './template'))
        .destination('./')
        .use(template)
        .build(function (err) {
            if (err) {
                throw err;
            }
        });
};

function template(files, metalsmith, next) {
    var keys = Object.keys(files),
        metadata = metalsmith.metadata();

    async.each(keys, run, next);
    function run(file, done) {
        var str = files[file].contents.toString();
        render(str, metadata, function (err, res) {
            if (err) return done(err);
            files[file].contents = new Buffer(res);
            done();
        });
    }
}
