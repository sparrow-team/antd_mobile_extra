const path = require('path');
const commonConfig = require('./bisheng.common.config');

module.exports = Object.assign({}, commonConfig, {
  port: 8001,
  source: {
    components: './components',
    docs: './docs',
    changelog: [
      'CHANGELOG.zh-CN.md',
      'CHANGELOG.en-US.md',
    ],
  },
  root: process.env.pubUrl,
  theme: './ant-design-mobile/site/desktop/src',
  htmlTemplate: path.join(__dirname, './desktop/template.html'),
  docVersions: {
  },
});
