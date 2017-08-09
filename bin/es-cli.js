#!/usr/bin/env node

var inputHandler = require('../lib'),
    packageJson = require('./../package.json');

inputHandler.initCommand(packageJson, process.argv);







