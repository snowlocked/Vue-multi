var getEntry = require('./get-entry');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');


module.exports = function(htmlFiles) {
  var pages = getEntry.getEntry(htmlFiles),
    arr = [];
  for (var pathname in pages) {
    // console.log("filename:" + pathname + '.html');
    // console.log("template:" + pages[pathname]);
    // 配置生成的html文件，定义路径等
    var conf = {
      favicon: '',
      filename: pathname + '.html',
      template: pages[pathname], // 模板路径
      minify: { //
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true, // js插入位置
      chunks: [ "vendor", "manifest","common",pathname], // 每个html引用的js模块，也可以在这里加上vendor等公用模块
      hash:true
    };
    // console.log('conf:');
    // console.log(conf);
    // 需要生成几个html文件，就配置几个HtmlWebpackPlugin对象
    arr.push(new HtmlWebpackPlugin(conf));
  }
  return arr;
}


