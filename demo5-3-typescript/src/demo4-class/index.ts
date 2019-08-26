class Greeter2 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet () : string{
        return "hello" + this.greeting;
    }
}
let greeter2 = new Greeter2('1232');
console.log(greeter2.greet());

//继承

class Animal {
    move(distanceInmeters: number = 0) {
        console.log(`animal moves ${distanceInmeters} m.`);
    }
}
let animalA = new Animal();
animalA.move()
class Dog extends Animal {
    bark () {
        console.log('Woof');
    }
}
let dogA = new Dog();
dogA.move(12);
dogA.bark();


class AnimalB {
    name: string;
    constructor (theName: string) {
        this.name = theName;
    }
    move(meters: number = 0){
        console.log(`${this.name} moved ${meters}m`);
    }
    hello () {
        console.log(`my name is ${this.name}`)
    }
}
const animalb = new AnimalB('kitty');
animalb.move();
animalb.move(2);

class Snake extends AnimalB {
    constructor(name: string) {
        super(name);
    }
    move(distanceInmeters: number =6 ) {
        console.log(`${distanceInmeters} mmmm`);
        super.hello();
        super.move(distanceInmeters); 

    }
}
const snake2 = new Snake('111');
snake2.move();


class privateAnimal {
    private name: string;
    constructor(theName: string) {
        this.name =  theName;
    }
}
// new privateAnimal("Cat").name; // 错误: 'name' 是私有的.

// protected  在派生类中仍可以访问
class Person {
    protected name: string
    constructor(theName: string) {
        this.name = theName;
    }
}
class Employee extends Person {
    private department: string;
    constructor(name, department) {
        super(name);
        this.name = name;
        this.department = department;
    };
    public say () {
        console.log(`my name is ${this.name} and  working on ${this.department}`)
    }
}
const Nic = new Employee('nic', 'DPE');
console.log(Nic.say());

// 只读属性
class Octopus {
    readonly name: string;
    readonly numberOfFlags: number = 8;
    constructor (name: string) {    
        this.name = name;
    }
}

// 存取器
class Employeer {
    fullName: string;
    constructor() {
        // this.fullName = '123';
    }
}

let employee = new Employeer();
console.log(employee);
employee.fullName ='1';
console.log(employee);

let password = '123456';
class Empassver {
    private _fullName: string;
    get fullName(): string {
        return this._fullName;
    }
    set fullName(newName : string) {
        if (password && password == '123456') {
            this._fullName = newName;
        } else {
            console.log('cant access');
        }
    }
}
let em = new Empassver();
em.fullName = '123';
em.fullName = '223';
console.log(em);
password = '123';
em.fullName = '345';
console.log(em);


//静态属性

class Grid {
    static origin = {x: 1, y: 2};
    scale: number;
    constructor(scale: number) {
        this.scale = scale;
    }
    calculateDistanceFromOrigin (point: {x: number, y: number}) {
        let xDis = (point.x - Grid.origin.x);
        let yDis = (point.y - Grid.origin.y);
        return Math.sqrt(xDis * xDis + yDis * yDis) / this.scale;
    };
}

// 把类当作 interface使用

class Point {
    a: number;
    b: number;
}
interface Pointx extends Point {
    z:number;
}
let pointx: Pointx = {a: 1, b: 2, z: 3};
