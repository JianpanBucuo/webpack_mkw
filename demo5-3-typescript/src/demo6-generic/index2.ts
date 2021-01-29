function indentity<T>(arg: T): T {
    return arg
}
let output4 = indentity<string>('myString')
console.log(output4)

function loggingIdentity<T>(arg: T[]): T[] {
    return arg
}
interface GenericIdentityFn {
    <T>(arg: T): T
}

class GernericNumber<T> {
    zeroValue: T
    add: (x: T, y: T) => T
}
let myGenericNumber2 = new GernericNumber<number>()
myGenericNumber2.zeroValue = 0
myGenericNumber2.add = function (x, y) {
    return x + y
}
console.log(myGenericNumber2)

interface Lengthwise {
    length: number
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length)
    return arg
}