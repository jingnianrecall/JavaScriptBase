
var arr = [1, [2, [3, 4]]];

function flatten(arr) {
    let result = []
    
    for (let i = 0, arrLen = arr.length; i < arrLen; i++) {
        const current = arr[i];
        
        if (Array.isArray(current)) {
            result = result.concat(flatten(current))
        }
        else {
            result.push(current)
        }
    }

    return result;
}

// console.log(flatten(arr))


function flattenOnlyNum(arr) {
    return arr.toString().split(',').map(function(item) {
        return +item
    })
}

// console.log(flattenOnlyNum(arr))

function flattenReduce(arr) {
    return arr.reduce(function(prev, next) {
        return prev.concat(Array.isArray(next) ? flattenReduce(next) : next)
    }, [])
}

// console.log(flattenReduce(arr))

debugger
function flattenES6(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }

    return arr
}

console.log(flattenES6(arr))