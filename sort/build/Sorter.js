"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// the sorter class will be an abstract class. abstract classes cannot be instantiated
// on their own. they can only be used as a parent class. they can have references to
// methods that do not exist in their scope. for example, length, compare and swap below
// do not exist in this class. they will, however, exist in the scope of the child
// classes.
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
