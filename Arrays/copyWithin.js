// copyWithin(target)
// copyWithin(target, start)
// copyWithin(target, start, end)



Array.prototype.myCopyWithin = function (target, start/*, end*/) {

    var O = Object(this);

    var len = O.length >>> 0;

    var relativeTarget = target >> 0;

    var to = relativeTarget < 0 ?
        Math.max(len + relativeTarget, 0) :
        Math.min(relativeTarget, len);

    var relativeStart = start >> 0;

    var from = relativeStart < 0 ?
        Math.max(len + relativeStart, 0) :
        Math.min(relativeStart, len);

    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end >> 0;

    var final = relativeEnd < 0 ?
        Math.max(len + relativeEnd, 0) :
        Math.min(relativeEnd, len);

    var count = Math.min(final - from, len - to);

    var direction = 1;

    if (from < to && to < (from + count)) {
        direction = -1;
        from += count - 1;
        to += count - 1;
    }

    while (count > 0) {
        if (from in O) {
            O[to] = O[from];
        } else {
            delete O[to];
        }

        from += direction;
        to += direction;
        count--;
    }

    return O;
};




// const array = ['a', 'b', 'c', 'd', 'e'];

// console.log(array.myCopyWithin())