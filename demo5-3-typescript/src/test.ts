import { type } from "os";

interface Bird {
    fly: boolean
    sing: () => {}
}
interface Dog {
    fly: boolean
    bark: () => {}
}
function trainAnimal(animal: Bird | Dog) {
    if (animal.fly) {
        (animal as Bird).sing()
    }
    else {
        (animal as Dog).bark()
    }
}
function trainAnimalSecond(animal: Bird | Dog) {
    if ('sing' in animal) {
        animal.sing()
    }
    if ('bark' in animal) {
        animal.bark()
    }
}

function add(first: string | number, second: string | number) {
    if (typeof first === 'string' || typeof second === 'string') {
        return `${first} ${second}`
    }
    return first + second
}

class NumberObject {
    constructor(public count: number) { }
}
function addSecond(first: object | NumberObject, second: object | NumberObject) {
    if (first instanceof NumberObject && second instanceof NumberObject) {
        return first.count + second.count
    }
    return 0
}

enum Status {
    OFFLINE = 0,
    ONLINE = 1,
    DELETED = 2
}
function getResult(status: number) {
    if (status === Status.OFFLINE) {

    }
    if (status === Status.ONLINE) {

    }
    if (status === Status.DELETED) {

    }
}

interface Item {
    name: string
}
class DataManager<T extends Item> {
    constructor(private data: T[]) {

    }
    getItem(index: number) {
        return this.data[index].name
    }
}
const data = new DataManager([{ name: '1' }])

const func: <T>(params: T) => T = (params) => {
    return params
}