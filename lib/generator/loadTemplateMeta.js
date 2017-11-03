const path = require('path');

const FileUtil = require('../util/FileUtil');

module.exports = function loadTemplateMeta(templateDir) {
    const metaFilePath = path.join(templateDir, 'meta.js');
    let meta = {};
    if (FileUtil.checkFileExist(metaFilePath)) {
        meta = require(metaFilePath);
    }
    return meta;
};
