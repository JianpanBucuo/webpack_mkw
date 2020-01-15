 //方法参数访问器

//  参数装饰器表达式会在运行时当作函数被调用

//1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
//2. 参数的名字
//3. 参数在函数参数列表中的索引

const parseConf = [];

// 方法调用前执行的函数
function parseFunc (target, name, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        for( let i = 0; i < parseConf.length; i++ ) {
            const type = parseConf[i];
            console.log(type);
            switch( type) {
                case 'number':
                    args[i] = Number(args[i]);
                    break;
                case 'string':
                    args[i] = String(args[i]);
                    break;
                case 'boolean':
                    args[i] = String(args[i]) === 'true';
            }
            return originalMethod.apply(this, args);
        }
    }
    return descriptor; 
}

// 向全局对象中添加对应的格式化信息
function parse(type) {
    return function (target, name, index) {
        parseConf[index] = type;
        console.log('parseConf[index]:', type);
    };
}
// let modal = new Modal();
// console.log(modal.addOne('10')); // 11