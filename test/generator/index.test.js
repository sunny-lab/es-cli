const should = require('should');
const path = require('path');
const assert = require('assert');
const fs = require('graceful-fs');

const Env = require('../support/Env');
const generator = require('../../lib/generator/');
const correctTemplateDir = path.join(__dirname, '../support');
const buildDir = path.join(__dirname, '../build');

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
        it('should throws because of invalid buildDir', function () {
            (function () {
                generator(correctTemplateDir);
            }).should.throw('Invalid buildDir');
            (function () {
                generator(correctTemplateDir, '');
            }).should.throw('Invalid buildDir');
        });
        it('should throws because of invalid projectConfig', function () {
            (function () {
                generator(correctTemplateDir, '/');
            }).should.throw('Invalid projectConfig');
            (function () {
                generator(correctTemplateDir, '/', {});
            }).should.throw('Invalid projectConfig');
        });
        it('should generate correct build files', function () {
            this.timeout(20000);
            generator(correctTemplateDir, buildDir, {
                npm: {private: true},
                git: {},
                basic: {name: 'es-cli-test', author: 'sunny-lab'},
            }).then(function (result) {
                const indexPath = path.join(__dirname, '../build/index.html');
                const jsPath = path.join(__dirname, '../build/a.js');
                var fileData = fs.readFileSync(indexPath);
                assert.equal(fileData.toString().indexOf('es-cli-test') !== -1, true);
                assert.equal(fileData.toString().indexOf('sunny-lab') !== -1, true);
                fileData = fs.readFileSync(jsPath);
                assert.equal(fileData.toString().indexOf('es-cli-test') !== -1, true);
            });
        });
    });
});
