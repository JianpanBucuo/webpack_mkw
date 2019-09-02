class Demo{
    name:string;
    constructor(name: string) {
        this.name = name;
    }
}
//装饰器： 特殊类型的声明
//可以附加到 类声明 方法 访问符 属性 参数上

//方法装饰器
//它被应用到属性描述符上，可以用来监视，修改 或替换方法定义

// 方法装饰器接收三个参数
// 1. 对于静态成员是类的构造函数， 对于实例是类的原型对象
// 2. 成员的名字
// 3. 成员的属性描述符

function addAge11(constructor: Function ) {
    constructor.prototype.age = 18;
}
function method2(target: any, propertyKey: string, descriptor:　PropertyDescriptor) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}


@addAge11
class Hello23 {
    name: string;
    age: number;
    constructor() {
        console.log('hello');
        this.name = 'yugo';
    }
    @method2
    hello() {
        return 'instance method';
    }
    @method2
    static shello() {
        return 'static methods';
    }
}

