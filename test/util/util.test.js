const should = require('should');

const Env = require('../support/Env');
const util = require('../../lib/util/util');

describe('util/util', function () {
    describe('#getTemplatesList()', function () {
        it('should return correct result', function () {
            should.equal(util.getTemplatesList().length, 1);
        });
    });
    describe('#getLicenseList()', function () {
        it('should return correct result', function () {
            should.equal(Array.isArray(util.getLicenseList()), true);
        });
    });
});


