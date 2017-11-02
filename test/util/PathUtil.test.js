const should = require('should');
const path = require('path');

const Env = require('../support/Env');
const PathUtil = require('../../lib/util/PathUtil');

describe('util/PathUtil', function () {
    describe('#getProcessCwd()', function () {
        it('should return correct pwd', function () {
            const pwd = PathUtil.getProcessCwd();
            should.equal(/es-cli/g.test(pwd), true);
        });
    });
    describe('#getTemplatePath()', function () {
        it('should return correct template path', function () {
            const templateDir = PathUtil.getTemplatePath('test-template');
            should.equal(templateDir.indexOf('.es-cli-templates/test-template') !== -1, true);
        });
    });
    describe('#getCwdDir()', function () {
        it('should return correct current absolute path', function () {
            const dir = PathUtil.getCwdDir(__dirname);
            should.equal(dir.indexOf('es-cli/test/util') !== -1, true);
        });
    });
});
