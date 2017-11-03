const should = require('should');
const del = require('del');

const Env = require('../support/Env');
const PathUtil = require('../../lib/util/PathUtil');
const downloadTemplate = require('../../lib/util/downloadTemplate');

describe('util/downloadTemplate', function () {
    describe('#downloadTemplate()', function () {
        it('should return correct result', function () {
            this.timeout(20000);
            const templateName = 'koa-react-spa';
            const templateDir = PathUtil.getTemplatePath(templateName);
            del.sync([templateDir], {force: true});
            return downloadTemplate(templateName)
                .should.eventually.equal(templateDir)
                .then(function () {
                    // run again for testing more branches
                    return downloadTemplate(templateName).should.eventually.equal(templateDir);
                });
        });
        it('should throw error', function () {
            this.timeout(20000);
            const templateName = 'koa-react-spa_not_exist';
            const templateDir = PathUtil.getTemplatePath(templateName);
            del.sync([templateDir], {force: true});
            return downloadTemplate(templateName)
                .catch(function (err) {
                    err.message.should.be.equal('Invalid template name');
                });
        });
    });
});


