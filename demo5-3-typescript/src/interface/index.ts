function printLabel (labeledObj: {label: string}) {
    console.log(labeledObj.label);
}
let myObj = {
    label: '123'
}
printLabel(myObj)

//重写例子
interface LabelValue {
    label: string
}
//好比一个名字，用来描述上面例子的要求

function printLabel2 ( labeledObj: LabelValue ) {
    console.log(labeledObj.label);
}

// 可选属性
//接口里的属性不全都是必须的，有些是只在某些条件下存在，或者根本不存在
interface SquareConfig {
    color?: string,
    width?: number
}
// 接口里是 预设参数 ， ：后 确定    返回值
function createSquare(config: SquareConfig) : { color: string, area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
}

//只读属性
// 一些对象只能在对象刚刚创建的时候修改其值，你可以在属性名前用 readonly来指定只读属性
interface Point {
    readonly x: number,
    readonly y: number
}

let p1: Point = {x:1, y:2};


// ReadonlyArray<T>
// 把所有数组的可变方法去掉了，因此可以确保数组创建后再也不能修改、
let arrx1 : number[] = [1,2,3,4];
let ro: ReadonlyArray<number> = [1,2,3,4];

// 重新定义 ro 并赋值到 ca
let ca = ro as Array<number>

interface SquareConfig2 {
    color?: string;
    width?: number;
    [propName: string]: any;
}
// 定义接口时， 可能需要额外的属性

//函数类型
// 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型