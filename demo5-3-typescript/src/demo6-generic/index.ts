//泛型
/*
我们不仅要创建一致的定义良好的 API，同时也要考虑可重用性。
组件不仅能够支持当前的 数据类型，   同时也能支持未来的数据类型，
这在创建大型系统时，为你提供十分灵活的功能

使返回值的类型与传入参数的类型是相同

*/
function identity2(arg: any): any {
    return arg;
}
//会使信息丢失， 不确定返回值类型

// 这里我们 使用类型变量，它是一种特殊的变量，只用于表示类型 而不是 值

function identity<T>(arg: T): T {
    return arg;
}

//定义好泛型函数之后 我们有两种方法可以使用

// 第一种是，传入所有的参数，包含类型参数：
let output = identity<string>('myString');

// 第二种方法更普遍。利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型
let output2 = identity(123);


// 使用 T类型的 数组
function loggingIdentity<T>(args: T[]):T[] {
    console.log(args.length);
    return args;
}

// 给函数定义类型
//泛型类型
let myIdentiy: <T>(args: T) => T = identity2;

// 泛型接口
interface GenericIdentityFn  {
    <T>(args: T) : T;
}
let myIdentiy2 : GenericIdentityFn = identity;

// 泛型类
class GenericNumber<T> {
    zeroNumber: T;
    add:(x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
console.log(myGenericNumber);
myGenericNumber.zeroNumber =1;
myGenericNumber.add =function (x,y) {
    return x + y;
};
// 对泛型进行约束
// 我们定义一个接口来描述约束条件。 创建一个包含 .length属性的接口，使用这个接口和extends关键字来实现约束
interface Lengthwise {
    length: number
}
function loggingIdentity2 <T extends Lengthwise> (args: T)  :T {
    console.log(args.length);   
    return args;
}

// 在泛型中使用 类型约束
