const should = require('should');
const path = require('path');

const Env = require('../support/Env');
const loadTemplateQuestion = require('../../lib/generator/loadTemplateQuestion');

describe('generator/loadTemplateQuestion', function () {
    describe('#loadTemplateQuestion()', function () {
        it('should load question successfully', function () {
            const question = loadTemplateQuestion(path.join(__dirname, '../support'));
            question.length.should.be.equal(0);
        });
    });
});