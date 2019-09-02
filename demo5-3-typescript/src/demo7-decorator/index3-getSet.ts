//访问器装饰器
//访问器装饰器应用于 访问器的属性描述符
//可用于观察 修改 或替换 访问者的定义、

//接收三个参数
// 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
// 成员的名字。
// 成员的属性描述符。

function configurable (value: boolean) {
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = true;
    } 
}

class Point23 {
    private _x: number;
    private _y: number;
    constructor(x: number,y: number) {
        this._x = x;
        this._y = y;
    }   
    @configurable(false) 
    get x() {
        return this._x;
    }

    @configurable(false)
    get y() {
        return this._y;
    }
} 