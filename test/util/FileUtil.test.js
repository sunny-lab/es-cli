const should = require('should');
const path = require('path');

const Env = require('../support/Env');
const FileUtil = require('../../lib/util/FileUtil');

describe('util/FileUtil', function () {
    describe('#syncCreateDir()', function () {
        it('should create dir successfully', function () {
            Env.clearEnv();
            const createDir = path.join(Env.getTempDir(), 'test-create');
            FileUtil.syncCreateDir(createDir);
            should.equal(FileUtil.checkFileExist(createDir), true);
        });
        it('should skip creating existed dir', function () {
            Env.clearEnv();
            const tmpDir = Env.getTempDir();
            FileUtil.syncCreateDir(tmpDir);
        });
    });
});
