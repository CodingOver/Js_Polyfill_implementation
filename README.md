# JS-PAI : A JavaScript Implementation

![JS-PAI : A JavaScript Implementation](https://augnitive.com/wp-content/uploads/2019/09/Fundamentals-of-JavaScript-Part-2.png)

![Follow](https://img.shields.io/twitter/follow/codingover?label=Follow%20%40codingover&logo=twitter&style=plastic)
![](https://img.shields.io/badge/rating-4.5%2F5-brightgreen)
![progress](https://progress-bar.dev/0/?title=Completed)

In this series which i called **JS-PAI** **<mark>*JavaScript Polyfills And Implementation*</mark>**,I have seen 80% of the company is asking this hot topic. So before applying to the job interview you should have thorough understanding of polyfills.

But you might be thinking why companies are asking polyfills in interview process.

Because it cover lot of in-depth understanding of Js Concepts and fundamentals like loops, prototype, this, and understanding functions that is why interviwer is keen to know about polyfills

In this repo I will implment various built in function and methods in JavaScript. 


## Js Array Methods
> - [x] `Implmented`- Array.prototype.at()

- The **at()** methode take an integer value.
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
