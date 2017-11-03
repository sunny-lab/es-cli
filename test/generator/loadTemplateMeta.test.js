const should = require('should');
const path = require('path');

const Env = require('../support/Env');
const loadTemplateMeta = require('../../lib/generator/loadTemplateMeta');

describe('generator/loadTemplateMeta', function () {
    describe('#loadTemplateMeta()', function () {
        it('should load meta successfully', function () {
            const meta = loadTemplateMeta(path.join(__dirname, '../support'));
            meta.name.should.be.equal('test');
        });
        it('should load meta fail', function () {
            const meta = loadTemplateMeta(path.join(__dirname));
            Object.keys(meta).length.should.be.equal(0);
        });
    });
});
