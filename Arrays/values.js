function ArrayIterator(array, kind) {
    this.array = array;
    this.kind = kind;
    this.nextIndex = 0;
}

ArrayIterator.prototype.next = function () {
    var currentIndex = this.nextIndex;

    if (currentIndex >= this.array.length) {
        return { 'value': undefined, "done": true }
    }

    this.nextIndex++


    if (this.kind === 'value') {
        return {
            'value': this.array[currentIndex],
            'done': false
        };
    };

};

Array.prototype.myValues = function () {
    return new ArrayIterator(this, 'value')
}


// let arr = [1, 2, 3, 4];

// let iterator = arr.myValues();


// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)

// console.log(iterator.next().value) // undefiend
