import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { Sorter } from './Sorter';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([10, 30, -5, 0]);
// numbersCollection.sort();
// console.log(numbersCollection.data);


// const charactersCollection = new CharactersCollection('Xaayb');
// charactersCollection.sort()
// console.log(charactersCollection.data);


const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-30);
linkedList.add(4);
linkedList.add(-1);

linkedList.sort();
linkedList.print();
