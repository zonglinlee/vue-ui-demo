const path = require('path')
module.exports = {
  pages:{
    index:{
      // 修改项目入口文件, examples文件夹用来做测试用
      entry:'examples/main.js',
      template:'public/index.html',
      filename:'index.html'
    }
  },
  // 扩展webpack配置,使webpages加入编译
  chainWebpack: config => {
    config.module
    .rule('js')
    .include.add(path.resolve(__dirname,'packages')).end()
    .use('babel')
    .loader('babel-loader')
    .tap(options => {
        //修改它的选项
      return options
    })
  }
}