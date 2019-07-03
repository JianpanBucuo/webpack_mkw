### Webpack 环境搭配

package.json
"private":"true" // 私有项目 不会被发布到 线上npm
"main":"index.js" //向外暴露 文件接口

npx webpack -v //查看项目内 webpack版本

npx 会帮助我们在当前项目的 node_modules里找到 webpack 并执行该命令

npm install webpack @4.25.0 安装具体版本好
npm info webpack webpack 版本号查询