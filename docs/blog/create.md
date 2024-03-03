---
sticky: 1
descriptionHTML: '
<span style="color:var(--description-font-color);">1分钟内完成自己的博客创建</span>
<pre style="background-color: #292b30; padding: 15px; border-radius: 10px;" class="shiki material-theme-palenight"><code>
    <span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@sugarat/theme@latest</span></span>
    <br/>
    <br/>
    <span class="line"><span style="color:#B392F0;">bun create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@sugarat/theme</span><span style="color:#E1E4E8;"> </span></span>
</code>
</pre>'
top: 1
tag:
 - Blog
sidebar: false
---

# 基于 VitePress搭建个人博客
## 前言
**1分钟内完成自己的博客创建**

:::warning 注意事项
使用 [pnpm](https://pnpm.io)，[yarn](https://www.npmjs.com/package/yarn)，[bun](https://bun.sh/) ，需要单独安装

**如果喜欢尝鲜，想体验更快的启动和构建速度，推荐使用 bun**（<i style="color:red">windows 用户不建议使用 bun</i>）

其它情况推荐使用 pnpm，*不推荐使用 yarn*

:::code-group
```sh [安装 PNPM]
npm install -g pnpm
```
```sh [安装 bun]
npm install -g bun
```
:::

## 快速创建项目 

使用 [@sugarat/create-theme](https://github.com/ATQQ/sugar-blog/tree/master/packages/create-theme) 快速创建模板项目

:::code-group
```sh [npm]
npm create @sugarat/theme@latest
```
```sh [yarn]
yarn create @sugarat/theme
```
```sh [pnpm]
pnpm create @sugarat/theme
```
```sh [bun]
bun create @sugarat/theme
```
:::

:::details bun创建的项目不一样之处
1、会多出一个配置文件 `bunfig.toml`，默认配置了淘宝镜像源

2、安装依赖后对应lock文件 `bun.lockb`

3、运行命令需添加一个 `--bun` 参数，不加就是Node运行，体验不到快速(未来官方会做优化)
:::

当然你也可以自定义项目名创建
:::code-group
```sh [npm]
npm create @sugarat/theme@latest my-first-blog
```
```sh [yarn]
yarn create @sugarat/theme my-first-blog
```
```sh [pnpm]
pnpm create @sugarat/theme my-first-blog
```
```sh [bun]
bun create @sugarat/theme my-first-blog
```
:::

接下来按照 [操作指引](https://app.warp.dev/block/lZAFeRnRFgOcsRSUOU5ApV) 进行操作即可

|                        npm/yarn/pnpm                         |                             bun                              |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| ![](https://img.cdn.sugarat.top/mdImg/MTY4OTQyMDE1NTcxMA==689420155710) | ![](https://img.cdn.sugarat.top/mdImg/MTY5NjE0NzY1NDEwMA==696147654100) |


1、切换到项目的目录

```sh
cd my-blog
```

2、安装依赖
::: code-group
```sh [pnpm]
pnpm install
```

```sh [bun]
bun install
```
:::

3、开发启动
:::code-group
```sh [pnpm]
pnpm dev
```

```sh [bun]
bun run --bun dev
```
:::


![](https://img.cdn.sugarat.top/mdImg/MTY5NTIxODUyMDU4MQ==695218520581)

你就会得到一个这样的页面

![](https://img.cdn.sugarat.top/mdImg/MTY3Njk4OTk2Mjc0Nw==676989962747)

4、 构建产物
:::code-group
```sh [pnpm]
pnpm build

```
```sh [bun]
bun run --bun build
```
:::

![](https://img.cdn.sugarat.top/mdImg/MTY5NTIxODYwNzA3Nw==695218607077)


5、预览构建产物

:::code-group

```sh [pnpm]
pnpm serve
```
```sh [bun]
bun run --bun serve
```

:::

 ![](https://img.cdn.sugarat.top/mdImg/MTY5NTIxODY1NzAzNg==695218657036)

## 升级主题

如果主题更新了，升级主题，原项目只需执行如下指令即可
:::code-group

```sh [pnpm]
pnpm add @sugarat/theme@latest

# 更新 vitepress 版本（通常安装最新的即可，主题包每次更新不出意外都会使用最新的VitePress）
pnpm add vitepress@latest
```

```sh [bun]
bun update @sugarat/theme

# 更新 vitepress 版本（通常安装最新的即可，主题包每次更新不出意外都会使用最新的VitePress）
bun install vitepress@latest

```
:::

## 发布到GitHub Pages
1、项目根目录创建 `.github/workflows` 文件夹

2、在 `.github/workflows` 文件夹下创建 `deploy.yml` 文件

3、复制以下内容到 `deploy.yml` 文件中

```yml
name: GitHub Actions Build and Deploy
on: [push]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v3 # If you're using actions/checkout@v2 you must set persist-credentials to false in most cases for the deployment to work correctly.
      with:
        persist-credentials: false
    - name: Install and Build
      run: |
        npm install
        npm run build
    - name: Deploy
      uses: JamesIves/github-pages-deploy-action@v4
      with:
        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        BRANCH: gh-pages
        FOLDER: ./docs/.vitepress/dist
```

- [GitHub Actions 入门教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)

### 常见错误
::: danger GitHub Actions错误
Error: The deploy step encountered an error: The process '/usr/bin/git' failed with exit code 128 
错误原因：默认情况下，新存储库没有适当的工作流权限。
:::

**解决方案:**

1、转到存储库 `Setting`

2、选择`Actions` > `General`

3、在"工作流权限(Workflow permissions)"中，选择 `Read and write permissions`

------

::: danger 访问错误
部署完成后无法访问问题
:::

**解决方案：**

1、转到存储库 `Setting`

2、选择 `Pages` > `Branch` > `选择gh-pages分支` > `保存`

3、在"工作流权限(Workflow permissions)"中，选择 `Read and write permissions`


## 自定义GitHub Pages域名
1、购买域名

2、在域名管理平台添加解析，将域名解析到GitHub Pages的域名上

![](https://qn.kaife.cn/blog/20240302211906-Snipaste_2024-03-02_21-18-34.webp)

![](https://qn.kaife.cn/blog/20240302212150-Snipaste_2024-03-02_21-20-53.webp)


## 添加 giscus 评论
**由 giscus 提供支持要求：**

1、该仓库是公开的，否则访客将无法查看 discussion。

2、giscus app 已安装，否则访客将无法评论和回应。

3、Discussions 功能已在你的仓库中启用。

我的博客使用[sugarat主题默认内置了](https://theme.sugarat.top/config/global.html#comment)，只需要修改配置文件即可

```ts
const blogTheme = getThemeConfig({
  comment: {
    repo: 'xkfe/blog',
    repoId: 'R_kgDOLaPFrA',
    category: 'Announcements',
    categoryId: 'DIC_kwDOLaPFrM4CdrjP',
  }
})
```


## 参考
::: tip 🔗参考链接
**[VitePress](https://vitepress.dev/zh/)**

**[@sugarat/theme](https://theme.sugarat.top/)**
:::

