// .concat() => This methode is used to merge two or more arrays. the concat() methode does not change the existing array, but instead return a new array
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];



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


console.log(array1.myConcat(array2))


