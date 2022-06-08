Array.prototype.myFilter = function (callback, context) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this)) {
            arr.push(this[i])
        }
    }

    return arr;
}


// const fruits = [
//     { name: 'Mango', price: 200 },
//     { name: 'Apple', price: 300 },
//     { name: 'Banana', price: 100 },
//     { name: 'Grapes', price: 150 }
// ]

// const myFiltred = fruits.myFilter(fruit => {
//     return fruit.price > 150
// })

// console.log(myFiltred)