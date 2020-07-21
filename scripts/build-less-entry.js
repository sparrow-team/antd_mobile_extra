#!/usr/bin/env node

/* eslint-disable */
'use strict';

// Build a entry less file to dist/antd_mobile_extra.less
var fs = require('fs');
var path = require('path');

if(fs.existsSync(path.join(__dirname,'../dist'))) {
  console.log('Building a entry less file to dist/antd_mobile_extra.less');
  var componentsPath = path.join(process.cwd(), 'components');
  var componentsLessContent = '';

// Build components in one file: lib/style/components.less
  fs.readdir(componentsPath, function (err, files) {
    files.forEach(function (file) {
      if (fs.existsSync(path.join(componentsPath, file, 'style', 'index.less'))) {
        componentsLessContent += `@import "../${path.join(file, 'style', 'index.less')}";\n`
      }
    });
    fs.writeFileSync(path.join(process.cwd(), 'lib', 'style', 'components.less'), componentsLessContent);

    // Build less entry file: dist/antd.less
    fs.writeFileSync(
      path.join(process.cwd(), 'dist', 'antd_mobile_extra.less'),
      '@import "../lib/style/index.less";\n@import "../lib/style/components.less";'
    );
  });
}
