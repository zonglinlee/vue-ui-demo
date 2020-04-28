
- 新建vue.config.js，修改项目入口为examples，这个打包的结果是用来做测试的
- 新建一个packages文件夹，将所有的组件放到里面，还有font文件夹也放进来。这个文件夹是真正用来打包UI库用的
- vue 插件install方法
当调用 Vue.use(plugin) 的时候，会执行plugin这个插件里面的 install(Vue) 方法,并传入Vue对象作为参数,在install方法中我们全局注册所有组件
- 这里我们在packages目录下新建index.js作为入口文件，导入所有组件，并定义install方法，
- vue-cli提供了专门打包为库的命令,在package.json文件中定义以下 npm script命令,用于打包成库
`"lib":"vue-cli-service build --target lib packages/index.js"`
## 发布到npm上
### package.json 文件的修改
- 将默认的`private:true`改成false
- 注意包名不能喝npm上现有的包重名，否则上传不了
- 添加包入口文件名`main:vue-ui-demo.umd.min.js`
- 添加.npmignore文件 ，类似.gitignore文件

### 登录npm 并发布
npm login 
npm publish

npm ERR! 403 403 Forbidden - PUT https://registry.npmjs.org/vue-ui-demo - You do not have permission to publish "vue-ui-demo". Are you logged in as the correct user?
这个报错是因为包重名了，所以发布之前最好在npm上搜索一下，看有没有命名冲突

## 参考链接
https://www.bilibili.com/video/BV1nJ411V75n