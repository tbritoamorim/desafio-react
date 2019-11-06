const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
     style: true,
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: {
         '@primary-color': '#1DA57A', 
         '@layout-header-background': '#4EA0BE',
         '@menu-background': '#4EA0BE'
        },
      }),
  );