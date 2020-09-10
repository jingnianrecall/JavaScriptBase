/*var curry =  function (fn) {
    var args = [].slice.call(arguments, 1)

    return function() {
        var newArgs = args.concat([].slice.call(arguments))
        return fn.apply(this, newArgs)
    }
}
*/
/*
function sub_curry(fn) {
    var args = [].slice.call(arguments, 1);

    return function() {
        return fn.apply(this, args.concat([].slice.call(arguments)))
    }
}

function curry(fn, length) {

    length = length || fn.length;

    var slice = Array.prototype.slice;

    return function() {
        if (arguments.length < length) {
            var combined = [fn].concat(slice.call(arguments))
            return curry(sub_curry.apply(this, combined), length - arguments.length)
        } else {
            return fn.apply(this, arguments)
        }
    }
}

var fn = curry(function(a, b, c) {
    return [a, b, c]
})

debugger
// fn("a", "b", "c")
console.log(fn("a")("b")("c"))*/

function curry(fn, args) {
    length = fn.length;

    args = args || [];

    return function() {
        var _args = args.slice(0),
            arg;

        for (let i = 0; i< arguments.length; i++) {
            arg = arguments[i];
            _args.push(arg);
        }

        if (_args.length < length) {
            return curry.call(this, fn, _args);
        }
        else {
            return fn.apply(this, _args)
        }
    }
}

var fn = curry(function(a, b, c) {
    console.log([a, b, c]);
})

fn("a", "b")("c")