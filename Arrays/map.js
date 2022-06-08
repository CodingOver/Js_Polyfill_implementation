Array.prototype.myMap = function (callback) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i, this))
    }
    return arr
}


// const array1 = [1, 4, 9, 16];

// pass a function to map
// const map1 = array1.myMap(x => x * 2);

// console.log(map1);
// expected output: Array [2, 8, 18, 32]
