// 构造函数创建对象
function Person() {

}
var person = new Person();
person.name = 'XiaoYao';
console.log(person.name)

/**
 * prototype
 * 每个函数都有一个prototype属性
 */
function Person() {

}
// prototype 是函数才会有的属性
Person.prototype.name = 'Linger';
var person1 = new Person();
var person2 = new Person();
console.log(person1.name)   //Linger
console.log(person2.name)   //Linger

/**
 * 函数的prototype属性指向一个对象，这个对象是调用该构造函数而创建的实例的原型
 * 什么是原型？ 每一个JavaScript对象（null除外）在创建的时候就会与之关联另一个对象
 * 这个对象就是原型，每一个对象都会从原型 “继承” 属性。
 */

 /**
  * 构造函数和原型的关系
  *   Person   ——————————————>  Person.prototype
  * (构造函数)    prototype         (实例原型)
  */

/**
 * 怎么表示实例与原型（person和Person.prototype）的关系?
 * 属性 __proto__
 * 每个JavaScript对象(除了null)都具有一个属性，叫__proto__,这个对象指向该属性的原型。
 */
function Person() {

}
var person = new Person();
console.log(person.__proto__ == Person.prototype)

 /**
  * 构造函数和原型的关系
  *   Person   ——————————————>  Person.prototype
  * (构造函数)    prototype         (实例原型)
  *     |                             /
  *     |                            /
  *     |                           /
  *   person  ———————————————>   __proto__
  */
 // 实例对象和构造函数都可以指向原型，原型是否有属性指向构造函数或实例？

 /**
  * constructor
  * 没有指向实例的，因为一个构造函数可以有多个实例。
  * 原型通过属性 constructor 指向构造函数，每个原型都有一个constructor属性指向关联的构造函数
  */

  function Person() {

  }
  console.log(Person == Person.prototype.constructor); // true

 /**
  *     |—————————> prototype ———————————>|
  *   Person   ——————————————>  Person.prototype
  * (构造函数)<——— constructor <—————(实例原型)
  *     |                             /
  *     |                            /
  *     |                           /
  *   person  ———————————————>   __proto__
  */

  // 综上得出构造函数、实例原型、和实例之间的关系
  function Person() {

  }
  var person = new Person();

  console.log(person.__proto__ == Person.prototype)     //true
  console.log(Person.prototype.constructor == Person)   //true
  console.log(Object.getPrototypeOf(person) === Person.prototype) //true

 /**
  * 实例与原型
  * 读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性
  * 如果还查不到，就去找原型的原型，一直找到最顶层为止
  */
 function Person() {

 }

 Person.prototype.name = 'XiaoYao';
 var person = new Person();

 person.name = 'Linger';
 console.log(person.name)   // Linger

 delete person.name;
 console.log(person.name)   // XiaoYao
 /**
  * 删除了person的name属性时，读取person.name，从person对象中找不到name属性
  * 就会从person的原型也就是person.__proto__,也就是Person.prototype中查找
  * 如果还没有找到，原型的原型是什么呢？
  */

  /**
   * 原型的原型
   * 原型也是一个对象，既然是对象，我们就可以用最原始的方式创建它：
   */
  var obj = new Object();
  obj.name = 'XiaoYao';
  console.log(obj.name);

  /**
   * 其实原型对象就是通过Object构造函数生成的，结合之前所讲
   * 实例的__proto__指向构造函数的prototype 
   */

 /**
  *     |—————————> prototype ———————————>|
  *   Person   ——————————————>  Person.prototype
  * (构造函数)<——— constructor <—————(实例原型)
  *     |                            /  |
  *     |                           /   |
  *     |                          /    |
  *   person  ——————————>   __proto__   |
  *                                     |
  *                                     |
  *                                 __proto__
  *                                     |
  *                                     |
  *         ———————> prototype ———————> |
  *   Object()     ———————————>  Object.prototype
  *         <——— constructor <—————
  */

  /**
   * 原型链
   * 那Object.prototype的原型呢？
   * null
   */
  console.log(Object.prototype.__proto__ === null) //true

  /**
   * null 代表什么？
   * null表示没有对象，即该处不应该有值
   * 所以Object.prototype.__proto__的值为null等同于说Object.prototype没有原型
   * 所以查找属性查到Object.prototype就可以停止查找了
   */
  /**
  *     |—————————> prototype ———————————>|
  *   Person   ——————————————>  Person.prototype
  * (构造函数)<——— constructor <—————(实例原型)
  *     |                            /  ||
  *     |                           /   ||
  *     |                          /    ||
  *   person  ——————————>   __proto__   ||
  *                                     ||
  *                                     ||
  *                                 __proto__
  *                                     ||
  *                                     ||
  *         ———————> prototype ———————> ||
  *   Object()     ———————————>  Object.prototype
  *         <——— constructor <—————     ||
  *                                     ||
  *                                     ||
  *                                 __proto__
  *                                     ||
  *                                     ||
  *                                    null
  */

  //相互关联的原型组成的链状结构就是原型链（图中||）

  /**
   * 补充
   * 1、constructor
   *   function Person() {
   * 
   *   }
   *   console.log(Person == Person.prototype.constructor); // true
   * 
   * 当获取person.constructor时，其实person中并没有constructor属性，
   * 当不能读取到constructor属性时，会从person的原型也就是Person.prototype中读取
   * 
   * 2、__proto__
   *    大部分浏览器都支持这个非标准方法访问原型，然而它并不存在于Person.prototype中
   *    实际来自Object.prototype,与其说是一个属性，不如说是一个getter/setter
   *    当使用obj.__proto__时，可以理解返回Object.getPrototypeOf(obj)
   * 
   * 3、继承
   *    继承意味着复制操作，然而JavaScript默认并不会复制对象的属性，相反，JavaScript只是在两个对象之间创建一个关联
   *    一个对象就可以通过委托访问另一个对象的属性和函数，所以与其叫继承，委托的说法反而更准确些。
   */