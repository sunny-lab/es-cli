const should = require('should');
const path = require('path');
const assert = require('assert');

const Env = require('../support/Env');
const generator = require('../../lib/generator/');
const correctTemplateDir = path.join(__dirname, '../support');

describe('generator/index', function () {
    describe('#generator()', function () {
        it('should throws expected error messages about templateDir', function () {
            (function () {
                generator();
            }).should.throw('Invalid templateDir');
            (function () {
                generator('');
            }).should.throw('Invalid templateDir');
            (function () {
                generator({});
            }).should.throw('Invalid templateDir');
        });
        // it('should throws expected error messages about templateDir', function () {
        //     generator().should.throws(function (err) {
        //         err.message.should.be.equal('Invalid templateDir');
        //     });
        //     generator('').should.throws(function (err) {
        //         err.message.should.be.equal('Invalid templateDir');
        //     });
        //     generator({}).should.throws(function (err) {
        //         err.message.should.be.equal('Invalid templateDir');
        //     });
        // });
    });
});
