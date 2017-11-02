const Promise = require('bluebird');
const Metalsmith = require('metalsmith');
const async = require('async');
const render = require('consolidate').twig.render;
const path = require('path');


module.exports = function (templateDir, buildDir, projectConfig) {
    return Metalsmith(buildDir)
        .clean(true)
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

        // filter files which is not twig file
        if (!isTwigFile(str)) {
            return done();
        }
        render(str, metadata, function (err, res) {
            if (err) return done(err);
            files[file].contents = new Buffer(res);
            done();
        });
    }
}

function isTwigFile(content) {
    return /{{([^{}]+)}}/g.test(content) || /{%([^{}]+)%}/g.test(content);
}
