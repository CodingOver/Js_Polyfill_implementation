Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) // currentValue, index, array
    }
}

// const array1 = ['a', 'b', 'c'];

// array1.myForEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"