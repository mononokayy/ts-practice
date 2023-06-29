class Node {
    next: Node | null = null;

    constructor(public data: number) {}
}


// a linked list has a value and a pointer to the next item in the list
// this pointer should be a unique identifier
// the last link will have a pointer value of NULL
export class LinkedList {
    // head property is either a reference to a node or null if the list is empty
    // it is the head of the list, the first node
    head: Node | null = null;

    // add method takes in a number (data) and creates a new node with it
    add(data: number): void {
        const node = new Node(data);

        // check to see if the head node exists or not. if not, this node will be the head
        if (!this.head) {
            this.head = node;
            return;
        }

        // otherwise, this node will be added to the tail end of the list
        let tail = this.head;
        // as long as the current node in the list has a value in its 'next' property,
        // move to the next node in the list until the last node is found.
        while (tail.next) {
            tail = tail.next;
        }

        // give the last node a 'next' value of the new node, making the new node
        // the last in the list.
        tail.next = node;
    } 
    
    // length method finds the number of nodes in a list
    get length(): number {
        // check if the list is empty
        if (!this.head) {
            return 0;
        }

        // if not empty, then check for a value in the 'next' property until one
        // is null. that will give the correct length
        let length = 1;
        let node = this.head;
        while (node.next) {
            length ++;
            node = node.next;
        }

        return length;
    }

    // at method tells the value of the node at the given index
    at(index: number): Node {
        // if there is no head, the list is empty
        if (!this.head) {
            throw new Error('Index is out of bounds');
        }

        // count from the first index
        let counter = 0; 
        let node = this.head;
        // while node exists, 
        while (node) {
            // if the counter is at the input index value, return that node
            if (counter === index) {
                return node;
            }

            // otherwise, increment the counter and move to the next node
            counter++;
            node = node.next;
        }
        
        // if the while loop was somehow exited, throw an error
        throw new Error('Index is out of bounds');
    }

    // compare method will compare the values of the nodes at the given indices
    compare(leftIndex: number, rightIndex: number): boolean {
        // if the list is empty, throw an Error
        if (!this.head) {
            throw new Error('List is empty');
        }

        // otherwise, return a boolean as to if the first value is larger than the second
        return this. at(leftIndex).data > this.at(rightIndex).data;
    }

    // swap method allows users to swap the values at two indices
    swap(leftIndex: number, rightIndex: number): void {
        // if the list is empty, throw an error
        if (!this.head) {
            throw new Error('List is empty');
        }

        // otherwise, pull the values from the two indices
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);

        // then swap the two values
        const leftSide = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftSide;
    }

    print(): void {
        // if the list is empty, do nothing
        if (!this.head) {
            return;
        }

        // otherwise, iterate through the list and print the values
        let node: Node | null = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
