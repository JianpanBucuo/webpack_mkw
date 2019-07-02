### webpack优势 webpack好像是一个 js翻译器

 模块打包工具
 webpack 帮助我们管理复杂项目的工具

 目的
 把不同的业务逻辑 拆成不同的模块 -> 每个模块自己做自己的事情  -> 保证项目的维护性 和 可扩展性

 1. Tree shaking
 2. Code splitting
 3. 懒加载

### 面向对象编程
 当我们面向过程编程时，代码业务逻辑会堆在一起，最后代码块会非常的长

 面向对象编程 (创建一个构造函数，将业务逻辑写到构造函数里,并使用 new 操作符 创建一个新对象 )
 重用性、灵活性和扩展性, 维护性强
 当使用面向对象编程时，会分割业务代码， 维护文件时，方便找出 错误

### 通过webpack翻译我们的代码使浏览器认识我们的代码
浏览器不识别 import 语句, webpack知道import 是要引入一个模块，并做一次翻译，使浏览器识别 import

安装 webpack
npm install webpack webpack-cli index.js

翻译 index.js (使用 webpack 翻译 index.js 文件)
npx webpack ./src/index.js

