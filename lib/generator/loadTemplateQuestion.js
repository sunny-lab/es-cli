const path = require('path');

const FileUtil = require('../util/FileUtil');

module.exports = function loadTemplateQuestion(templateDir) {
    const metaFilePath = path.join(templateDir, 'question.js');
    let meta = [];
    if (FileUtil.checkFileExist(metaFilePath)) {
        meta = require(metaFilePath);
    }
    return Array.isArray(meta) ? meta : [];
};
