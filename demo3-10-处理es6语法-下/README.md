配置presets时  有targets参数，将判断在当前浏览器上是否有必要进行转换，如果没有必要，将不会进行转换
通过配置 target里 浏览器版本的大小，将会看出 打包后的文件大小也会不同


库项代码
有效避免 polyfill的问题， 避免污染全局环境，会以闭包的方式引入
@babel/plugin-transform-runtime
@babel/runtime

npm install --save-dev @babel/plugin-transform-runtime
npm install --save @babel/runtime

因为 配置 babel时 配置项很多， 可以将配置项 单独写到 .babelrc文件当中。