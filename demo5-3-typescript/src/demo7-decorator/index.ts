// https://www.jianshu.com/p/afef44d449bd

function helloWord(target: any) {
    console.log('hello world');
    target.prototype.a = 123;
}
@helloWord
class HelloWordClass {
    a: number;
}


var axx = new HelloWordClass();
console.log(axx.a)

function addAge(args: number) {
    console.log('aaa');
    return function (target: Function) {
        target.prototype.age = args;
    }
}
// 类的装饰器
@addAge(18)
// @helloWord()
class Hello {
    name: String;
    age:Number;
    constructor() {
        console.log('hello');
        this.name = 'yego';
    }
}
 var ax: Hello = new Hello();
console.log(ax.age);

//方法装饰器
//他会被应用到方法的属性描述符上，可以用来监视， 修改或者替换方法定义
// 方法装饰会在运行时传入下列三个参数
// 1. 对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象
// 2.成员的名字
// 成员的属性描述符{value: any, writable: boolean, enumerable: boolean, configurable: boolean}


function addAge2(constructor: Function) {
    constructor.prototype.age = 18;
}

function method(target:any, propertyKey: string, descriptor: PropertyDescriptor  ) {
    console.log('method',target);
    console.log('method',propertyKey);
    console.log('method',"desc " + JSON.stringify(descriptor) + "\n\n");
}

@addAge2
class Hello2{
  name: string;
  age: number;
  constructor() {
    console.log('hello');
    this.name = 'yugo';
  }
​
  @method
  hello(){
    return 'instance method';
  }
​
  @method
  static shello(){
    return 'static method';
  }
}