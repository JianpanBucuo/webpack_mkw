/*
boolean 
string 
number 
array
void
tuple 定义数组元素的类型
enum 枚举
any
never
object
*/


class Greeter {
    greeting: string;
    constructor (message: string) {
        this.greeting = message
    }
    greet () {
         return 'Hello' + this.greeting;
    }
}
let greeter = new Greeter('world');
 console.log(greeter);

 //基础类型
let isDone : boolean = false;
let decLiteral: number = 6;
let str : string = "hello world";

//数组类型
let arr : object[] = [{}];
let arrx: Array<object> = [{}];

let arr2 : number[] = [1,2,3];
let arr2x: Array<number> = [1,2,3];

//元组 Tuple
let tuple :[string, number] = ['asa',1];

//枚举 enum类型

enum Color { Red = 1, Green = 5 , Blue };
let c : Color = Color.Green;
console.log(c);
let d : Color = Color.Blue;
console.log(d);

//使用值 返回 属性的名字
let colorName : String = Color[5];
console.log(colorName)

//any 任意类型
let notSure: any = 123;
notSure = '123';


// 当你不确定数组元素类型时 使用 any
let list : any[] = [1,2,3,'as'];

// void   与 any相反 不代表任何类型 当一个函数没有返回值时，通常会使其返回值类型为 void

function warn() : void {
    console.log('warning');
}
let vi : void =  undefined;
let vb : void = null;

//默认情况下null和undefined是所有类型的子类型


//never 类型表示的是 那些永远不存在值的类型
// never类型是那些总是会 抛出 异常 或者根本就不会返回值的函数表达式或 箭头函数的返回值类型
// 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
/*
返回never的函数必须存在无法达到的终点
*/
function error(message: string): never {
    throw new Error(message);
}

 //Object
//  object 表示非原始类型， 也就是除 number string boolean symbol null undefined 之外的类型
// declare function create(o: object | null): void;
 function create(o: object | null): any {

 };

create({ prop: '111' }); // OK



// 类型断言
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;
let strLen3: number = someValue.length;
console.log(strLength)
console.log(strLength2)
console.log(strLen3)