const path = require('path');
const pxtoremPlugin = require('postcss-pxtorem');
const rucksack = require('rucksack-css');
const autoprefixer = require('autoprefixer');
const commonConfig = require('./bisheng.common.config');


const kitchenConfig = {
  port: 8002,
  source: {
    components: './components',
  },
  output: './_site/kitchen-sink',
  root: ('/' )+'kitchen-sink/',
  entryName: 'kitchen-sink',
  theme: './ant-design-mobile/site/kitchen/src',
  htmlTemplate: path.join(__dirname, './kitchen/template.html'),
};

console.log(process.env.pubUrl,'process.env.pubUrl===',kitchenConfig)

if (process.env.HD_ENV === 'hd') {
  kitchenConfig.postcssConfig = {
    plugins: [
      rucksack(),
      autoprefixer({
        browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
      }),
      pxtoremPlugin({
        rootValue: 50,
        propList: ['*'],
      }),
    ],
  };
}

module.exports = Object.assign({}, commonConfig, kitchenConfig);
