//函数

//添加函数类型

function add(x: number, y: number) :number {
    return x + y;
}
let myAdd = function (x: number, y: number) : number {
    return x + y;
}

// 书写完整的函数类型
let myAdd2 : (x: number, y: number) => number = 
    function (x: number, y: number): number {
        return x + y;
    }

// 推断类型， 在一边指定了类型， 在另一边 没有指定，typescript 会自动识别出类型
let myAdd3 = function (x:number, y:number) :number{
    return x + y;
}
let myAdd4: (x:number, y: number) => number = function (x,y) {
    return x + y;
}

// 传递给一个函数的参数个数必须与函数期望的参数个数一致
function buildName (firstName: string, lastName: string): string {
    return firstName + lastName;
}
// 在TypeScript里我们可以在参数名旁使用 ?实现可选参数的功能
function buildName2 (firstName: string, lastName? : string) : string {
    return firstName + lastName;
}

// 默认初始化值的参数
function buildName3(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

// 剩余参数
let buildName4 : (firstName:string, ...restOfName: string[]) => string =  
    function   (firstName: string, ...restOfName: string[]): string {
        return firstName + restOfName.join(' ');
    }


    // 箭头函数能保存函数创建时的 this值，而不是调用时的值：
    let deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function() {
            // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
            return () => {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);
    
                return {suit: this.suits[pickedSuit], card: pickedCard % 13};
            }
        }
    }
    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();