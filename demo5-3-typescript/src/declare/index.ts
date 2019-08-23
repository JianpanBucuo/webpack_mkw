let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let {a, b} : {a: string, b: number} = o;

//默认值
function keepWholeObject(wholeObject: {a: string, b?: number}) {
    let {a, b = 123} = wholeObject;
}