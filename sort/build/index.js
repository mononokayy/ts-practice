"use strict";
class Sorter {
    // using the public modifier allows us to remove these extra lines
    // collection: number[];
    constructor(collection) {
        this.collection = collection;
        //     this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // comparing two values from the array
                // this normally only works if collection is an array of numbers
                // adding the "instanceof Array" creates a type guard that allows us to use Array properties rather than just properties shared between a number array and a string
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftSide = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftSide;
                    }
                }
                // this creates another type guard searching for a string
                if (typeof this.collection === 'string') {
                }
            }
        }
    }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
