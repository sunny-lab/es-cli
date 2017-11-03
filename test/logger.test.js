const should = require('should');
const Promise = require('bluebird');

const logger = require('../lib/logger');

describe('logger', function () {
    describe('#log()', function () {
        it('should console correct result', function () {
            logger.log('%s %s', 1, 2);
        });
    });
    describe('#success()', function () {
        it('should console correct result', function () {
            logger.log('%s %s', 1, 2);
        });
    });
    describe('#fatal()', function () {
        it('should console correct result', function () {
            logger.fatal('%s %s', 1, 2);
            logger.fatal(new Error('custom error'));
        });
    })
});

