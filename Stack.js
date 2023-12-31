class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    push(value){
        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }else {
            let temp = this.head
            this.head = newNode;
            this.head.next = temp
        }
        return this.size++
    }

    pop() {

        if (!this.head) return null;
        let temp = this.head;
        if (this.head === this.tail) {
            this.head = null
        }

        this.head = this.head.next
        this.size--;
        return temp.value
    }

    peek() {
        return this.head
    }

}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.pop()

console.log(stack)