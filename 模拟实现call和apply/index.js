/*
call apply
Function.prototype.call2 = function(context) {

    context = context || window
    context.fn = this

    let args = []

    for (let i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']')
    }

    let result = eval('context.fn(' + args + ')')
    
    delete context.fn

    return result
}


// 测试一下
var value = 2;

var obj = {
    value: 1
}

function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.call(null); // 2

console.log(bar.call2(obj, 'kevin', 18));


Function.prototype.apply2 = function(context, arr) {
    context = Object(context) || window

    context.fn = this

    let args = []
    let result;
    if (!arr) {
        result = context.fn()
    } else {

        for (let i = 0; i < arr.length; i++) {
            args.push('arr[' + i + ']')
        }

        result = eval('context.fn(' + args +')')
    }

    delete context.fn

    return result
}
*/
debugger
function Otaku (name, age) {
    this.name = name;
    this.age = age;

    this.habit = 'Games';
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}

function objectFactory() {
    // 1 创建一个空对象
    let obj = new Object();
    // 2 取出第一个参数（构造函数）
    let Constructor = [].shift.call(arguments)
    // 3 给新对象关联原型
    obj.__proto__ = Constructor.prototype
    // 4 
    Constructor.apply(obj, arguments)

    return obj
}

var person = objectFactory(Otaku, 'Kevin', '18')

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // 60

person.sayYourName(); // I am Kevin
