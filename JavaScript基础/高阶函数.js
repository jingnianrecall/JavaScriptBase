/**
 * 函数可以接收另一个函数作为参数，这种函数称之为高阶函数
 */
function add(x, y, f) {
    f(x) + f(y)
}

add(1, 5, Math.abs);

/**
 * map/reduce
 * 
 * 举例说明，比如我们有一个函数f(x)=x平方，要把这个函数作用在一个数组[1, 2, 3, 4, 5],就可以用map实现。
 * 
 * map()方法定义在JavaScript的Array中，调用map()方法，传入自定义函数，就得到一个新的Array。
 */
function pow(x) {
    return x * x;
}

let arr = [1, 2, 3];
let results = arr.map(pow);

console.log(results); // [1, 4, 9]

// 将Array的所有字符串转为数字
let arrStr = ["1", "2", "3"];

arrStr.map(Number); // [1, 2, 3]

/**
 * reduce
 * 
 * Array的reduce()把一个函数作用在这个Array的[x1, x2, x3....]
 * [x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
 * 
 */

//例：一个Array求和，可以用reduce实现：
let arrSum = [1, 3, 5, 7, 9];

arrSum.reduce(function (x, y) {
    return x + y;
});

/**
 * 补充知识：
 * split()方法用于把一个字符串分割成字符串数组
 * "12345".split(""); //["1", "2", "3", "4", "5"]
 * ("") 每个字符都会分隔
 * (" ") 分割单词
 * "2/3/4/5".split("/")
 */

/**
 * 
 * @param {请把用户输入的不规范的英文名字，变为首字母大写，其他小写的规范名字。
 * 输入：['adam', 'LISA', 'barT']，输出：['Adam', 'Lisa', 'Bart']。}  
 */
// 愚解
function normalize(arr) {
    let result = [];
    arr.map(function (x) {
        let word = x.split("");
        let str = [];

        word.map(function (x, index) {
            if (index === 0) {
                str.push(x.toLocaleUpperCase());
            } else {
                str.push(x.toLocaleLowerCase());
            }
        })
        let words = str.reduce(function (x, y) {
            return x + y
        })
        result.push(words);
    });
    return result;
}

// 网络解法
function normalize(arr) {
    function strs(str){
        str=str.toLowerCase();//先都小写
        let x1 = str.substring(0, 1).toUpperCase();//提取第一个进行大写
        let x2 = str.substring(1);//提取该元素的后面
        return x1+x2;
    }
    return arr.map(strs)  
}

// 测试:
if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
    console.log('测试通过!');
}
else {
    console.log('测试失败!');
}

/**
 * ["1", "2", "3"].map(parseInt);
 * 我们期望输出 [1, 2, 3], 而实际结果是 [1, NaN, NaN]
 */
["1", "2", "3"].map(parseInt);
/**
 * 由于map()接收的回调函数可以有3个参数：callback(currentValue, index, array)，通常我们仅需要第一个参数，
 * 而忽略了传入的后面两个参数。不幸的是，parseInt(string, radix)没有忽略第二个参数，导致实际执行的函数分别是：
 * parseInt('1', 0); // 1, 按十进制转换
 * parseInt('2', 1); // NaN, 没有一进制
 * parseInt('3', 2); // NaN, 按二进制转换不允许出现3
 * 可以改为r = arr.map(Number);，因为Number(value)函数仅接收一个参数。
 */

 /**
  * filter
  * 
  * 用于把Array的某些元素过滤掉，返回剩下的元素。
  * filter接收一个函数，作用于每个元素，根据返回的true还是false取舍该元素。
  */

  /**
   * 去重
   * indexOf总是返回第一个元素的位置，后续重复的元素位置与indexOf返回的位置不相等，因此被过滤掉了。
   */
  let result;
  let arr = ['xiaoyao', 'linger', 'yueru', 'baiyue', 'jiujianxian', 'xiaoyao', 'yueru'];

  result = arr.filter(function(val, index, self) {
    return self.indexOf(val) === index;
  })

  /**
   * sort 排序算法
   */