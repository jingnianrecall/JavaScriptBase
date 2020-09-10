/**
 * every()
 * 用于判断数组的所有元素是否满足测试条件（指定函数）,返回一个布尔值。
 */
let everyFun = currentVal => currentVal < 40;
let arr = [1, 30, 29, 39, 18, 22];

console.log(arr.every(everyFun)); //true

/**
 * some()
 * 用于测试数组中至少有一个元素满足条件（指定函数），返回一个布尔值。
 */
let arr = [1,2,3,4,5,9];
let someFun = val => val % 2 === 0;

console.log(arr.some(someFun)); //true

/**
 * find()
 * 用于查找符合条件的第一个元素，否则返回undefined
 */
let arr = [5, 12, 8, 110, 55, 180];
let findFun = arr.find(val => val >100);

console.log(findFun); //110

/**
 * findIndex
 * 用于查找符合条件的第一个元素的索引，没有找到返回-1
 */
let arr = [5, 12, 8, 110, 55, 180];

let findIndexFun = val => val >13;

console.log(arr.findIndex(findIndexFun));

/**
 * forEach() 方法对数组的每个元素执行一次给定函数
 */
let items = ['xiaoyao', 'linger', 'yueru'];
let copy = [];

// for
for (let i = 0; i < items.length; i++) {
    copy.push(items[i]);
}
// forEach
items.forEach(function(val) {
    copy.push(val)
})

/**
 * concat()方法用于合并两个或多个数组，此方法不会更改现有数组，而是返回一个新数组。
 */
let arr1 = ['a', 'b', 'c'];
let arr2 = ['d', 'e', 'f'];
let arr3 = arr1.concat(arr2);

console.log(arr3) // ["a", "b", "c", "d", "e", "f"]

/**
 * join() 方法将一个数组的所有元素连接成一个字符串并返回。
 */
let pal = ['xiaoyao','linger','yueru'];

console.log(pal.join()); // "xiaoyao,linger,yueru"
console.log(pal.join('')); // "xiaoyaolingeryueru"
console.log(pal.join('-')); //"xiaoyao-linger-yueru" 

/**
 * Array.from() 方法从一个类数组或可迭代对象创建一个新的，浅拷贝的数组实例。
 * 
 * 参数：
 *      arrayLike 想要转换成数组的伪数组对象或可迭代对象。
 *      fn 新数组中的每个元素都会执行该回调函数
 */
// 箭头函数
console.log(Array.from([1, 2, 3], x => x + x)); //[2, 4, 6]

// String
Array.from('linger'); // ["l", "i", "n", "g", "e", "r"]

// Set
let set = new Set(['xiaoyao', 'linger', 'yueru', 'xiaoyao']);
Array.from(set);    // ["xiaoyao", "linger", "yueru"]

// Map
let mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values()); // ["a", "b"]
Array.from(mapper.keys()); // ["1", "2"]

// 类数组对象（arguments）
function f() {
    return Array.from(arguments);
}
f(1, 2, 3); // [1, 2, 3]

// 合并去重
let m = [1,2,2];
let n = [2,3,3];

function combine() {
    let arr = [].concat.apply([], arguments);
    return Array.from(new Set(arr));
}
console.log(combine(m,n))

/**
 * Array.isArray()用于确定传递的值是否是一个Array。
 */
Array.isArray({'a': 0})

/**
 * Array.of() 方法创建一个具有可变数量参数的新数组实例，不考虑参数的数量或类型。
 */
 Array.of(7);       // [7]
 Array.of(1, 2, 3); // [1, 2, 3]

 Array(7);       // empty*7
 Array(1, 2, 3); // [1, 2, 3]