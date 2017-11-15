const fs = require('fs');
const path = require('path');

var file = fs.readFileSync(path.join(__dirname, 'test.js'));
console.log(file.toString());