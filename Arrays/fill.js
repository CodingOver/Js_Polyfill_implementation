Array.prototype.myFill = function (value) {

    let obj = Object(this)

    let len = obj.length >>> 0

    let start = arguments[1];
    let relativeStart = start >> 0;

    let k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(len, relativeStart)

    let end = arguments[2];
    let relativeEnd = end === undefined ? len : end >> 0;

    let final = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(len, relativeEnd);

    while (k < final) {
        obj[k] = value;
        k++
    }
    return this
}



let arr = [1, 2, 3, 4]

console.log(arr.myFill(0, 2, 4)) // 1 2 0 0
console.log(arr.myFill(5, 1)) // 1 5 5 5
console.log(arr.myFill(6)) // 6 6 6 6

