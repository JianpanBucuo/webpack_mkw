### loader 是什么

对应特定格式的文件， loader知道如何打包
webpack默认知道如何打包 js文件， 其他文件默认不支持

这时需要在 配置文件里告诉webpack如何打包其他文件模块

webpack会到 module(Object) -> rules(Array)去查找 对应格式的打包规则
(test, use)
 