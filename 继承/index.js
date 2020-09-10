// 1 原型链继承
function Parent() {
    this.name = 'xiaoyao'
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child() {
    
}

Child.prototype = new Parent();

var child1 = new Child();

console.log(child1.getName())

// 2 借用构造函数（经典继承）
function Parent() {
    this.names = ['xiaoyao', 'linger']
}

function Child() {
    Parent.call(this)
}

var child1 = new Child();

child1.names.push('yiru')

// 3 组合继承 原型链继承+经典继承
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green']
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child(name, age) {
    Parent.call(this, name)
    this.age = age
}

// 原型式继承
function createObj(o) {
    function F() {}
    F.prototype = o
    return new F()
}

// 寄生式继承
function createObj(o) {
    var clone = object.create(o);
    clone.sayName = function () {
        console.log(hi)
    }
    return clone
}