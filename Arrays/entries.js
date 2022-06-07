function ArrayIterator(array, kind) {
    this.array = array;
    this.kind = kind;
    this.nextIndex = 0
}


ArrayIterator.prototype.next = function () {
    var currentIndex = this.nextIndex;

    if (currentIndex >= this.array.length) {
        return { 'value': undefined, 'done': true }
    }
    this.nextIndex++;

    // Iterating entries()
    if (this.kind === 'key+value') {
        return {
            'value': [currentIndex, this.array[currentIndex]],
            'done': false
        }
    }
    Array.prototype.myEntries = function () {
        return new ArrayIterator(this, 'key+value')
    }
}

const array1 = ['a', 'b', 'c']
console.log(array1.myEntries())
