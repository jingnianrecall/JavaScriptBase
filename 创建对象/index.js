// 1、工厂模式
function createPerson(name) {
    var o = new Object();
    o.name = name;
    o.getName = function() {
        console.log(this.name)
    }

    return o;
}

var person1 = createPerson('xiaoyao')

// 2 构造函数模式
function Person(name) {
    this.name = name;
    this.getName = function () {
        console.log(this.name)
    }
}

var person2 = new Person('xiaoyao')

// 3 原型模式
function God(name) {
    
}

God.prototype.name = 'jiujianxian';
God.prototype.getName = function () {
    console.log(this.name)
}

var person3 = new Person();

// 4 组合模式 构造函数模式与原型模式双剑合璧
function Person(name) {
    this.name = name;
}

Person.prototype = {
    constructor: Person,
    getName: function () {
        console.log(this.name)
    }
}

var person4 = new Person();

// 4.1 动态原型模式
function Person(name) {
    this.name = name;
    if (typeof this.getName != 'function') {
        Person.prototype.getName = function () {
            console.log(this.name)
        }
    }
}

var person5 = new Person();
