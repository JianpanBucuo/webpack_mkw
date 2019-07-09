### 3-5 

loader 不同文件类型的打包

plugin

plugin可以使 webpack在运行到某个时刻的时候，帮你做一些事情

HTMLWebpackPlugin 会在打包结束后，自动生成一个 空的html文件并把 打包生成的js自动引入到 html文件中，
可以通过 template属性来 编辑 htmlWebpackPlugin生成的html文件

clean-webpack-plugin 会在打包流程执行前，删除 bundle 文件夹， 并开始打包
