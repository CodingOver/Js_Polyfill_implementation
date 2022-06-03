// .at() => Experimental. might also be web incompatible and expect behavior to change in the future.


let arr = ['apple', 'banana', 'pear']

Array.prototype.myAt = function (val) {

    if (val < 0) {
        return this[this.length + val];
    } else if (val >= 0) {
        return this[val]
    }

}

let theLast = arr.myAt(-4);

console.log(theLast)


// const array1 = [5, 12, 8, 130, 44];

// console.log(array1.at(10));
