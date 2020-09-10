// 原始双层循环
/*var array = [1, 1, '1', '1']

function unique(arr) {
    let res = [];

    for (let i = 0, arrLen = array.length; i < arrLen; i++) {
        for (let j = 0, resLen = res.length; j < resLen; j++) {
            if (array[i] === res[j]) {
                break;
            }

            if (j === resLen) {
                res.push(array[i])
            }
        }
    }

    return res;
}

console.log(unique(array))*/

// IndexOf方法
/*var array = [1, 1, '1']

function unique(arr) {
    let res = []

    for (let i = 0, arrLen = arr.length; i < arrLen; i++) {
        let curent = arr[i]

        if (res.indexOf(curent) === -1) {
            res.push(curent)
        }
    }

    return res
}

console.log(unique(array))*/

// 排序后去重
/*var array = [1, 1, '1']

function unique(arr) {
    let res = [];
    let seen;

    let arrSort = arr.concat().sort();

    for (let i = 0, arrLen = arrSort.length; i < arrLen; i++) {
        if (!i || seen !== arrSort[i]) {
            res.push(arrSort[i])
        }
        
        seen = arrSort[i];
    }

    return res;
}

console.log(unique(array))*/

//Unique API 第一版
/*var array1 = [1, 2, '1', 2, 1];
var array2 = [1, 1, '1', 2, 2]

function unique(arr, isSorted) {
    let res = [];
    let seen = [];

    for (let i = 0, arrLen = arr.length; i < arrLen; i++) {
        const current = arr[i];
        
        if (isSorted) {
            if (!i || seen !== current) {
                res.push(current)
            }
            seen = current
        }
        else {
            if (res.indexOf(current) === -1) {
                res.push(current)
            }
        } 
    }

    return res
}

console.log(unique(array1))
console.log(unique(array2, true))*/

//Unique API 第二版
/*var array3 = [1, 1, 'a', 'A', 2, 2];

function unique(array, isSorted, iteratee) {
    let res = []
    let seen = []

    for (let i = 0, arrLen = array.length; i < arrLen; i++) {
        const current = array[i];
        
        var computed = iteratee ? iteratee(current, i, array) : current;
        if (isSorted) {
            if (!i || seen !== current) {
                res.push(current)
            }
            seen = current
        }
        else if (iteratee) {
            if (seen.indexOf(computed) === -1) {
                seen.push(computed);
                res.push(current);
            }
        }
        else if (res.indexOf(current) === -1) {
            res.push(value);
        }
    }
    return res
}

console.log(unique(array3, false, function(item){
    return typeof item == 'string' ? item.toLowerCase() : item
}))*/

// ES5 fifter indexOf
/*var array = [2, 3, 1, 10, 10, '1'];

function unique(array) {
    let res = []

    res = array.filter(function(value, index, array){
        return array.indexOf(value) === index
    })

    return res
}

console.log(unique(array))*/

// ES5 fifter 排序去重
/*var array = [2, 3, 1, 10, 10, '1'];

function unique(array) {
    return array.concat().sort().filter(function(value, index, array){
        return !index || value !== array[index - 1]
    })
}

console.log(unique(array));*/

// Object键值对
/*var array = [1, 2, 1, 1, '1'];

function unique(array) {
    let obj = {}

    return array.filter(function(item, index, array) {
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    })
}

console.log(unique(array));*/

// ES6 SET
var array = [1, 2, 1, 1, '1'];

function unique(array) {
    return Array.from(new Set(array))
}

// 简化
function unique1(array) {
    return [...new Set(array)]
}

// 箭头函数
let unique2 = (a) => [...new Set(a)]

console.log(unique(array));
console.log(unique1(array));
console.log(unique2(array));

// ES6 MAP
function unique(arr) {
    const seen = new Map()
    return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
}