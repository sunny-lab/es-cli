const async = require('async');
const render = require('consolidate').swig.render;

module.exports = function template(files, metalsmith, next) {
    var keys = Object.keys(files),
        metadata = metalsmith.metadata();
    
    async.each(keys, run, next);
    function run(file, done) {
        var str = files[file].contents.toString();

        // filter files which is not twig file
        if (!isSwigFile(str)) {
            return done();
        }
        render(str, metadata, function (err, res) {
            if (err) return done(err);
            files[file].contents = new Buffer(res);
            done();
        });
    }
};

function isSwigFile(content) {
    return /{{([^{}]+)}}/g.test(content) || /{%([^{}]+)%}/g.test(content);
}