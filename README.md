# JS-PAI : A JavaScript Implementation

![JS-PAI : A JavaScript Implementation](https://augnitive.com/wp-content/uploads/2019/09/Fundamentals-of-JavaScript-Part-2.png)

![Follow](https://img.shields.io/twitter/follow/codingover?label=Follow%20%40codingover&logo=twitter&style=plastic)
![](https://img.shields.io/badge/rating-4.5%2F5-brightgreen)
![progress](https://progress-bar.dev/0/?title=Completed)

In this series which i called **JS-PAI** **<mark>*JavaScript Polyfills And Implementation*</mark>**, I have seen 80% of the companies are asking about this topic. So before applying to the job interview you should have thorough understanding of polyfills.

But you might be thinking why companies are asking about polyfills in interview process.

Because it cover lot of in-depth understanding of Js Concepts and fundamentals like loops, prototype, this, and understanding functions that is why interviewer is keen to know about polyfills

In this repo I will implment various built in function and methods in JavaScript. 


## Js Array Methods
> - [x] `implemented`- Array.prototype.at()

- The **at()** method take an integer value.
- Return item of the index of the integer value
- Accept negative intergers count back from the last item in the array
- Accept positive intergers count from the starting of the array
- Return **underfinded** if the given index can not be found

```JS
Array.prototype.myAt = function (val) {

    if (val < 0) {

        return this[this.length + val];

    } else if (val >= 0) {
        return this[val]
    }
}
```
> - [x] `implemented`- Array.prototype.concat()

- The **concat()** Method is used to merge two or more arrays .
- This method does not change the existing arrays.
- The method returns a new arrays.


```JS
Array.prototype.myConcat = function (...args) {
    const result = [...this]
    for (const i of args) {
        if (Array.isArray(i)) {
            result.push(...i)
        } else {
            result.push(i)
        }
    }

    return result
}
```
> - [x] `implemented`- Array.prototype.copyWithin()

- The **copyWithin()** Method is used to copies array elements to another position in the array.
- The method does not add items to the array
- The method returns the same array without modifying its length.


```JS
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
```


> - [x] `implemented`- Array.prototype.fill()

- The **fill()** Method chnages all elemetns in an array to a static value, from a start index (default **0**) to an end index (default **array.length**)
- The method returns the modified array.
- start and end position an be specified. if not, all elements will be filled

```Js
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
```

> - [x] `implemented`- Array.prototype.entries()

- The **entries()** Method return a new **Array Iterator** object that contains the key+value pairs for each index in the array.
- You need to store the **array.entries()** in a variable to use it for iteration

```Js
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


    if (this.kind === 'key+value') {
        return {
            'value': [currentIndex, this.array[currentIndex]],
            'done': false
        };
    };

};

Array.prototype.myEntries = function () {
    return new ArrayIterator(this, 'key+value')
}
```

> - [x] `implemented`- Array.prototype.values()

- The **values()** Method return a new **Array Iterator** object that contains the values for each index in the array.

```Js
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
```

> - [x] `implemented`- Array.prototype.keys()

- The **keys()** Method return a new **Array Iterator** object that contains the keys for each index in the array.

```Js
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


    if (this.kind === 'key') {
        return {
            'value': currentIndex,
            'done': false
        };
    };

};

Array.prototype.myKeys = function () {
    return new ArrayIterator(this, 'key')
}
```

> - [x] `implemented` - Array.prototype.filter()

- The **filter()** Method create a new array with all elements that pass the test implemented by the provided function.

- The method return value as a new array with elements that pass the test. If no elements pass the test, an empty array will be returned

```Js
Array.prototype.myFilter = function (callback, context) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this)) {
            arr.push(this[i])
        }
    }

    return arr;
}
```

> - [x] `implemented` - Array.prototype.filter()

- The **filter()** Method create a new array populated with the results of calling a provided function on every element in the calling array.

- The method return value as a new array with each element being the result of the callback function.

```Js
Array.prototype.myMap = function (callback) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i, this))
    }
    return arr
}
```