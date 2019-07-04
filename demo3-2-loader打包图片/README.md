### loader 打包图片静态图片资源 

如果想更改 打包文件时自定义参数 
需要在 loaders -> use里 options里配置 //
占位符 配置法


url-loader
file-loader

url-loader 可以做 file-loader的工作 并可以做额外的工作

url-loader 会把图片转换成一个 base64字符串  省了http请求
但图片大小很大时， 打包出的js文件也会很大 
options -> limit 来限制 需要转换成 base64格式的原始图片大小 （2048）2kb
