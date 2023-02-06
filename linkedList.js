// 10 -> 5 -> 12
class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor (value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append (value) {
        this.length++;
        const newNode = new Node (value);  

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
            
        
    }

    prepend (value) {
        this.length++;
        const newNode = new Node (value); 
        newNode.next = this.head; 
      
        this.head = newNode;

        return this;

    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push (currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert (index, value) {
        this.length++;

        let currentNode = this.head;

        const newNode = new Node (value);
        for (let i = 1; i < index; i++) {
            currentNode = currentNode.next;
        }

        newNode.next = currentNode.next;
        currentNode.next = newNode;

        return this;


    }

    reverse () {

        let currentNode = this.head;

        let prevNode = {};
        let nextNode = currentNode.next;


        for (let i = 0; i < this.length-1; i++) {
            // console.log (currentNode);
            prevNode = currentNode;
           
            currentNode = nextNode;
            nextNode = currentNode.next;

            currentNode.next = prevNode;
            if (i===0) {
                prevNode.next = null;
            }

            
        }
        this.head = currentNode;
        
        return this;

        
    }

}

const myLinkedList = new LinkedList (10);
myLinkedList.append (15);
// myLinkedList.append (20);

// myLinkedList.prepend (5);

// myLinkedList.insert (2,99);

console.log (myLinkedList.reverse().printList());
