### 配置 sourcemap

Sourcemap 是一个映射关系， 知道 main.js 的第 n 行 实际上对应的是 源代码中的第 n 行

配置了 source-map 打包过程是对变慢的
source-map （会生成一个 .map 文件 会精确到哪一行 哪一列，具体问题产生的点 比较耗费性能）

inline 会让 map 文件 以 dataurl 的方式 添加在 打包后的文件里面
cheap 只精确到行,不精确到列 只映射业务代码 打包性能会有一定的提升
module 会映射 依赖包，loader 一些第三方模块的错误
eval （生成 sourcemap 的方式 和 上面生成 sourcemap 的方式不同）打包速度最快性能最好的一种方式 通过 eval 执行 js 的方式 生成 sourcemap 对应关系 (提示出的内容可能不太精确)

最佳实践

开发方式
cheap-module-eval-source-map

上线代码
cheap-module-source-map

解决的问题

如果打包的代码出错，找不到出错的位置，通过配置 source-map 来把错误的代码映射到源代码上

###

sourcemap

#### none 打包后的代码

- 将所有生成的代码视为一大块代码。你看不到相互分离的模块。

#### eval 生成后的代码

- 每个模块相互分离，并用模块名称进行注释。可以看到 webpack 生成的代码。示例：你会看到类似 var module**WEBPACK_IMPORTED_MODULE_1** = **webpack_require**(42); module**WEBPACK_IMPORTED_MODULE_1**.a();，而不是 import {test} from "module"; test();

#### cheap-eval-source-map 转换过的代码

- 每个模块相互分离，并用模块名称进行注释。可以看到 webpack 转换前、loader 转译后的代码。示例：你会看到类似 import {test} from "module"; var A = function(\_test) { ... }(test);，而不是 import {test} from "module"; class A extends test {}。

#### cheap-module-eval-source-map 原始源代码

原始源代码 - 每个模块相互分离，并用模块名称进行注释。你会看到转译之前的代码，正如编写它时。这取决于 loader 支持。
