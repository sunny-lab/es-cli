const templateUrlMap = {
    'koa-react-spa': 'sunny-lab/es-cli-template-koa-react-spa',
    'koa': 'sunny-lab/es-cli-template-koa'
};

function getTemplateUrlMap() {
    return templateUrlMap;
}

function getTemplatesList() {
    return Object.keys(templateUrlMap);
}

function getLicenseList() {
    return [
        'private',
        'MIT',
        'ISC',
        'Apache-2.0',
        'GPL-2.0',
        'GPL-3.0',
    ]
}

exports.getTemplatesList = getTemplatesList;
exports.getLicenseList = getLicenseList;
exports.getTemplateUrlMap = getTemplateUrlMap;


