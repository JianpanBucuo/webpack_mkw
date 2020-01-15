/*
装饰器是一种特殊类型的声明，它能够附加到 
类声明，
方法， 
访问符， 
属性 
参数 上， 可以修改类的行为
*/

// 装饰器 本身就是函数， 理论上忽略参数的话，任何函数都可以当作装饰器

function Path(target: any) {
    console.log('I am the decorator');
}

@Path
class HelloService {}
// 装饰器执行时机
// 在Node.js环境中模块一加载时就会执行

function Path2 (p1: string, p2: string) {
    return function (target: any) {
        console.log(p1, p2);
    }
}
@Path2('hello','p2 world')
class HelloService2 {

}

// 五种装饰器

// 类装饰器
function classPath(path: string) {
    return  function (target: Function) {
        !target.prototype.$Meta && (target.prototype.$Meta = {});
        target.prototype.$Meta.baseUrl = path;
    }
}
interface base {
    baseUrl: string;
    a:string;
}

@classPath('/hello')
class HelloService3 {
    $Meta: base;
    constructor(){

    }
}

console.log(HelloService3.prototype.$Meta);
let hello = new HelloService3();
console.log(hello.$Meta.baseUrl)

// 方法装饰器
/*
接受三个参数
    1. 构造函数， 原型对象
    2. 成员的名字
    3. 成员的属性描述符
*/

function Get(url: string) {
    return function (target, methodName:string, descriptor: PropertyDescriptor) {
        console.log(target);
        console.log(methodName);
        console.log(descriptor)
        !target.$Meta && (target.$Meta = {});
        target.$Meta[methodName] = url;
    }
}

class getDemo {
    @Get('/url')
    get111() {

    }
}

// 方法参数装饰器
/* 
接收三个参数
1. 静态成员来说 是 类的构造函数  对于实例成员来说是类的原型对象
2. 方法的名字
3. 参数在函数参数列表中的索引

*/
function PathParam(paramName: string) {
     return function (target, methodName:string, paramIndex: number) {
        !target.$Meta &&　(target.$Meta = {});
            target.$Meta[paramIndex] = paramName;
            console.log(target);
            console.log(methodName,'methodName');
            console.log(paramIndex);
     }
}

class HelloService4 {
    $Meta: Object;
    constructor() { }
    getUser( @PathParam("userId") userId: string) { 
        console.log(  this.$Meta  ,'userId');
     }
}
const axx2 = new HelloService4();
axx2.getUser('111');

//  属性装饰器
/*
属性装饰器表达式会在运行时当作函数被调用
接收两个参数
1. 静态成员来说是构造函数， 对于类来说是类的原型对象
2. 成员的名字
*/
function DefaultValue(value: string) {
    return function (target: any, propertyName: string) {
        target[propertyName] = value;
    }
}

class Hello6 {
    @DefaultValue("world") greeting: string;
}

console.log(new Hello6().greeting);// 输出: world


// 装饰器执行的顺序

function ClassDedorator() {
    return function (target: any) {
        console.log('类装饰器');
    }
}
function MethodDecorator() {
    return function(target: any, methodName: string, descriptor: PropertyDescriptor) {
        console.log('方法装饰器');
    }
}
function ParamDecorator () {
    return function (target: any, methodName: string, paramIndex: number) {
        console.log('参数装饰器');
    }
}
function PropertyDecorator() {
    return function (target: any, propertyName: string) {
        console.log('属性装饰器');
    }
}

@ClassDedorator()
class HelloWord {
    @PropertyDecorator() 
    greeting:string;

    @MethodDecorator()
    hello ( @ParamDecorator() p1: string,) {
    }
}
