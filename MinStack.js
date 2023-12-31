class Stack {
    constructor() {
        this.items = [];
        this.minStack = [];
    }

    push(value) {
        this.items.push(value)
        if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]){
            this.minStack.push(value)
        } else {
            this.minStack.push(this.minStack[this.minStack.length - 1])
        }
    }

    pop() {
        if (this.items.length === 0) {
            return null
        }
        this.minStack.pop();
        return this.items.pop()
    }

    min() {
        if (this.minStack.length === 0 ){
            return null
        }
        return this.minStack[this.minStack.length - 1]
    }
}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.min())
// => 3

stack.pop()
stack.push(2)
stack.push(7)
console.log(stack.min())
// => 2