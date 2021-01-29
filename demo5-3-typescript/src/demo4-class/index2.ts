// private
// protected
// readonly
class Person {
    protected name: string
    constructor(name: string) {
        this.name = name
    }
}
class Employee extends Person {
    private department: string
    constructor(name: string, department: string) {
        super(name)
        this.department = department
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`
    }
}
let howard = new Employee('Howard', 'Sales')
console.log(howard.getElevatorPitch())

class Per {
    constructor(private readonly name: string) {
        this.name = name
    }
    getName() {
        return this.name
    }
}
const bx = new Per('22')
console.log(bx.getName())


abstract class ABstactAnimal {
    abstract makeSound(): void
    move(): void {

    }
}

abstract class Department {
    name: string
    constructor(name: string) {
        this.name = name
    }
    printName(): void {
        console.log('Department name' + this.name)
    }
    abstract printMeeting(): void
}
// 子类中使用的方法必须在抽向类中定义
class AccountingDepartment extends Department {
    constructor() {
        super('AccountingDepartment')
    }
    printMeeting(): void {

    }
}