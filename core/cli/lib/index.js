'use strict';

const log = require('@clin-cli/log');
const pck = require('../package.json');

function core() {
    console.log('exec core');
    checkPckVersion();
}

/**
 * @description 检查package.json中的版本号
 */
function checkPckVersion() {
    log.info('cli', `当前版本号：${pck.version}`);
}

module.exports = core;
