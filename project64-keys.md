## Vue-项目-重点

### day07-项目-重点

#### 01-项目-准备-vue-cli 创建项目结构

1. 来到项目所希望的目录->打开 cmd

2. vue init webpack 项目名

   1. 是否安装 vue-router -> Y
   2. 是否 use ESLint -> Y
   3. 编译方式 -> for most users
   4. unit tests->N
   5. e2e -> N
   6. npm/yarn -> npm

3. cd 项目目录

4. npm run dev 启动开发模式

   > 注意: 默认不会打开浏览器

#### 02-项目-准备-项目目录说明

1. .eslintignore -> ESLint 检查 js 代码排除忽略文件
2. eslintrc-> ESLint 配置文件
3. .gitignore -> git 排除忽略文件
4. build/ -> webpack 打包(src)的产物
5. conf/ -> 配置服务器 index.js autoOpenBrowser: true, -> npm run dev
6. src/main.js 和之前不一样 之前是 render-> 现在是 template 和 components

#### 03-项目-准备-代码规范-自定义指令-lintfix

> ESlint 自动检查 js 代码规范
>
> 一键调整代码规范

1. package.json->scripts->自定义指令

   > "lintfix": "eslint --ext .js,.vue src --fix",

2. npm run dev 让配置文件生效

3. npm run lintfix (对于未使用的变量 不能修复)

4. npm run dev

> 建议: 先感受 ESLint , 项目第三天 教如何禁用 eslint

#### 04-项目-准备-element-ui-文档分析

> vue 使用第三方 UI 库 饿了么 element-ui
>
> vuePC 项目:element-ui / iView
>
> vue 移动端项目: mint-ui

#### 05-项目-准备-element-ui-安装-引入

> npm i element-ui

`main.js`

```js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
```

> 在所有的.vue 文件 template 中就可以使用组件了!

#### 06-项目-准备-项目模板简化-调整

> 简化代码

#### 07-项目-准备-git-版本控制

> git 管理项目代码
>
> gitbash-> git 指令可以任何 cmd 中执行->git 报错->git 是无效指令->
>
> 1. 找到 git 软件安装路径 bin
> 2. 找到计算机管理/属性//环境变量 path -> 修改编辑 path -> 把上一步路径放在 path 里面
> 3. 可以在任意 cmd 中 git 指令
> 4. 重启电脑
>
> [网址](https://blog.csdn.net/shanshan_blog/article/details/53645358)
>
> 继续 gitbash 软件

```shell
git init
git add .
git commit -m "注释"
// github新建仓库
// 关联仓库
git push -u origin master
```

> 后续再 git

```shell
git add .
git commit -m "完成了功能1-登录"
git push
```

#### 08-项目-准备-git-分支管理

> 前提 git 管理代码/协同开发

> 项目 2 个人
>
> A 人->新建子分支 login->编写代码 ->git add. commit->把代码 A 合并到主分支 master
>
> B 人->新建子分支 home->编写代码 ->git add. commit->把代码 B 合并到主分支 master
>
> 在 master 主分支->git push

```shell
// 查看分支
git branch
// 新建分支并且切换到分支
git checkout -b 分支dev-login
// git branch
// 结果: 接下来所有的操作(代码编写/add/commit)在当前的dev-login进行操作的->开发login功能
```

#### 09-项目-登录-新建分支-login 组件-配置路由

> 当前开发 login 登录 当前分支 dev-login

1. 新建 login.vue 组件
2. 配置路由 router.js

```shell
// 在子分支完成小功能后,在子分支上
git add .
git commit -m "注释"
// 功能完成
// 切换到master
git checkout master
// 把dev-login分支写的代码合并到master
// git branch
git merge dev-login
// 在master主分支推送
git push
```

#### 10-项目-登录-引入表单组件

> 切换回 dev-login

1. 引入 el-form
2. 添加类名
3. 提供组件要用的数据

```shell
git branch
git status
git add .
git commit -m "引入登录组件"
```

> 合并代码 不需要每次都做,可以完成一大功能 最后一起合并和推送

#### 11-项目-登录-样式调整

```css
.login-wrap {
  /* 注意: 百分比布局 父元素height */
  height: 100%;
  background-color: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  background-color: #ffffff;
  border-radius: 5px;
  /* 开发 */
  width: 400px;
  padding: 30px;
}
.login-btn {
  width: 100%;
}
```

> 1. 百分比布局
>    1. base.css html,body{height:100%}
>    2. App.vue #app{height:100%}
> 2. vue 项目重点不是 css 只要能写出来就可以

#### 12-项目-登录-axios 插件

1. npm i axios
2. main.js 挂载原型 axios
3. 配置 baseUrl
4. this.\$http 发送请求了

#### 13-项目-登录-发送登录请求

```js
this.$http
  .post(`login`, this.formdata)
  .then(res => {
    console.log(2)

    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
```

> 服务器 cmd 卡死-> 回车->激活它

#### 14-项目-登录-引入提示框组件

```js
this.$http.post(`login`, this.formdata).then(res => {
  console.log(res)
  const {
    data: {
      data,
      meta: { msg, status }
    }
  } = res
  if (status === 200) {
    console.log('success----')
  } else {
    // 提示框 -> UI
    this.$message.error(msg)
  }
})
```

> 提示: 对象解构赋值

#### 15-项目-登录-登录成功-进入 home 组件

> 登录成功->渲染 home.vue

#### 16-项目-登录-简化登录请求代码-async 和 await

> 目的:让异步代码看起来像同步,好处没有函数嵌套

```js
const res = await this.$http.post(`login`, this.formdata)
```

1. 找异步代码
2. 在异步代码前面加 await 同时接受异步的结果
3. 在异步代码外层最近的函数前面加 async

#### 17-项目-登录-保存 token 值

> 将来在其他组件中使用用户的数据信息中 token 数据->保存 token->
>
> login.vue 有了 token -> xxoo.vue 使用 token->
>
> A 页面有数据 a -> B 页面使用 a->
>
> 要把 token 数据永久存储-> cookie/session/sessionStorage/localStorage 等->
>
> 使用 Html5 新特性 localStorage 保存 token

```js
// 把正确的用户的token保存起来
// 存值
localStorage.setItem('token', token)
// 取值
// const aa = localStorage.getItem("token");
// console.log(aa);
```

> 浏览器调试->application->cookie/localStorage 保存的数据

#### 18-项目-首页-布局容器-使用-样式调整

> 引入布局容器

```html
<el-container class="container">
  <el-header>Header</el-header>
  <el-container>
    <el-aside class="aside" width="200px">Aside</el-aside>
    <el-main class="main">Main</el-main>
  </el-container>
</el-container>
```

> 调整样式

```css
.container {
  height: 100%;
  background-color: red;
}
.aside {
  background-color: yellow;
}

.main {
  background-color: green;
}
```

#### 19-项目-首页-头部-样式调整

> 引入 layout 布局(24 份)
>
> el-row 一行
>
> el-col 一列

```html
<el-row>
  <el-col :span="4">
    <img src="@/assets/logo.png" alt="图片加载失败" />
  </el-col>
  <el-col :span="19" class="middle">
    <h2>电商后台管理系统</h2>
  </el-col>
  <el-col :span="1">
    <a href="#" class="logout">退出</a>
  </el-col>
</el-row>
```

#### 20-项目-合并代码-登录

```shell
// 子分支
git add .
git commit -m ""
// 切到主分支
git checkout master
// 合并代码
git merge dev-login
// 在master写代码
git status
git add .
git commit -m "test"
// 推送
git push
```

> 仓库地址链接
>
> 1. 下载
> 2. 使用 git 指令克隆项目仓库 git clone 项目网址https://github.com/LL-1214/shopmanager64.git
