const should = require('should');
const path = require('path');

const Env = require('../support/Env');
const loadTemplateMeta = require('../../lib/generator/loadTemplateMeta');
const meta = require('../support/meta');

describe('generator/loadTemplateMeta', function () {
    describe('#loadTemplateMeta()', function () {
        it('should load meta successfully', function () {
            const meta = loadTemplateMeta(path.join(__dirname, '../support'));
            meta.name.should.be.equal(meta.name);
        });
        it('should load meta fail', function () {
            const meta = loadTemplateMeta(path.join(__dirname));
            Object.keys(meta).length.should.be.equal(0);
        });
    });
});
