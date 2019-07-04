###打包静态资源-样式
如果解析 css格式的文件
css-loader
分析出 几个 css文件之间的关系，并把他们合并到一个css文件

style-loader
会将css-loader分析出的内容挂载到 index页面上

sass-loader node-sass
如果想支持 sass，需安装 sass-loader node-sass 并在 module rules里对 scss格式的文件进行配置

postcss-loader 
如果想在 css3 新属性上加上厂商前缀 要安装 postcss-loader 并在loader中配置，并定义一个 postcss.config.js

loader的执行顺序 从下到上 从右到左