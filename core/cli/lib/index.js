'use strict';
const semver = require('semver');
const colors = require('colors/safe');
const log = require('@clin-cli/log');
const pck = require('../package.json');
const constant = require('./const');

function core() {
    try {
        checkPckVersion();
        checkNodeVersion();
    } catch (error) {
        log.error(error.message);
    }
}

function checkNodeVersion() {
    // 1、获取当前的node版本号
    const currentVersion = process.version;
    // 2、对比最低版本号
    const lowestVersion = constant.LOW_NODE_VERSION;
    if (!semver.gte(currentVersion, lowestVersion)) {
        throw new Error(colors.red(`@clin/cli 需要安装 v${lowestVersion} 或以上版本的 node.`));
    }
}

/**
 * @description 检查package.json中的版本号
 */
function checkPckVersion() {
    log.info('@clin/cli', `当前版本号：${pck.version}`);
}

module.exports = core;
