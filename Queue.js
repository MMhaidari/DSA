class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(number) {
        let newNode = new Node(number)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        return this.size++
    }

    dequeue() {
        if (!this.head) return -1;

        let temp = this.head;
        if (this.head === this.tail) {
            this.tail  = null;
        }
        this.head = this.head.next;
        this.size--;
        return temp.value


    }

    peek() {
        return this.head?.value;
    }
}


const simple = new Queue()

simple.enqueue(10)
simple.enqueue(20)
simple.enqueue(30)
simple.dequeue()
simple.enqueue(45)
console.log(simple)