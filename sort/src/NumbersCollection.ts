import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
    constructor(public data: number[]) {
        // when setting up inheritance, the super function must be called.
        // this runs the constructor on the parent class, making sure the setup
        // code is executed.
        super();
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftSide = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftSide;
    }
}