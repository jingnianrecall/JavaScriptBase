/**
 * for...in(ES5方法)
 * 
 * for...in语句以任意顺序遍历一个对象的除Symbol以外的可枚举属性。 By MDN
 * 
 * for-in更适合遍历对象,不建议与数组一起使用，数组推荐使用for...of和Array.prototype.forEach()
 * 遍历数组存在的问题：
 * 1、index索引为字符串型数字（使用===全等可判断验证）
 * 2、遍历顺序可能不是实际数组内部顺序，可能随机顺序。
 * 3、使用for-in会遍历数组所有可枚举属性，包括原型(查找对象属性时也会遍历原型链上的属性)。
 *    需要配合hasOwnProperty()方法判断某个属性是否是该对象的实例属性，实现过滤原型对象中的属性。
 * 
 * 注：for-in会遍历原型链，继承层次较深易影响性能。
 * 
 * 应用场景：
 * 调试，方便检查对象属性名。处理key-value数据时，检查任何键为何值。
 */
Array.prototype.name = 'world';
let myArray = [1, 2, 10, 30, 100];
myArray.type='数组';
for(let index in myArray){
    if (myArray.hasOwnProperty(index)) {
        console.log(index);
    }
}
/*
output:
0
1
2
3
4
type
*/

/**
  * for...of(ES6)
  * 
  * for...of可以迭代任何可以迭代的对象（Array,Map,Set,String,arguments,DOM集合等等）
  * 
  * 不存在for-in循环的缺陷，可以正确响应break、continue、return语句。
  */

  /**
   * for...of 循环解构
   */
  const persons = [
    { name: 'xiaoyao' },
    { name: 'linger' }
];

for(const { name } of persons) {
    console.log(name);
}

// 简单求和
function sum() {
    let sum = 0;
    for (const number of arguments) {
        sum += number;
    }
    return sum;
}

sum(1,2,3,4);

/**
 * for...of 性能问题
 * 
 * 迭代大型数组时，for...of的执行熟读可能会比经典方法慢
 * 
 * 优点：
 *    1、简洁
 *    2、接受迭代器，数组，字符串，Set, Map, DOM集合
 *    3、接受类数组对象
 *    4、迭代的项目可以就地解构
 */

/**
 * forEach
 * 可同时获取key value。获取的下标（key）类型为number.
 * 
 * 注：除了抛出异常以外，没有办法中止或跳出forEach()循环。
 * 
 */

 myArray.forEach((item, index) => {
     console.log(index);
 })

 