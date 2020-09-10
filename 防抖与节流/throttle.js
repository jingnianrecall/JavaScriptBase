var count = 1

var container = document.getElementById("container")

function getUserAction(e) {
    console.log(e)
    container.innerHTML = count++
}

/*
// 时间戳
function throttle(func, wait) {
    var context, args;
    var previous = 0;

    return function() {
        context = this;
        args = arguments;

        var now = +new Date();

        if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
        }
    }
}*/

// 定时器
/*function throttle(func, wait) {
    var context, args;
    var timeout;

    return function() {
        context = this
        args = arguments

        if (!timeout) {
            timeout = setTimeout(function() {
                timeout = null
                func.apply(context, args)
            }, wait)
        }
    }
}*/

// 双剑合璧
function throttle(func, wait) {
    var context, args, timeout, result;
    var previous = 0

    var later = function () {
        previous = +new Date();
        timeout = null;
        func.apply(context, args)
    }

    var throttled = function() {
        context = this;
        args = arguments;

        var now = +new Date();
        //下次触发 func 剩余的时间
        var remaining = wait - (now - previous);

        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null
            }
            previous = now
            func.apply(context, args)
        } else if (!timeout) {
            timeout = setTimeout(later, remaining)
        }
    };

    return throttled;
}


container.onmousemove = throttle(getUserAction, 3000);