class Stack {
  constructor(size = 10) {
    this.stack =new Array(size)
    this.top = -1
    this.maxSize = size
  }

  empty() {
    return this.top === -1
  }

  push(element) {
    if(this.top === this.maxSize -1) {
      throw new Error('Stack overflow')
    }
    this.top++
    this.stack[this.top] = element
  }

  pop() {
    if (this.empty()) {
      throw new Error('Stack underflow')
    }

    const removed = this.stack[this.top]
    this.top--
    return removed
  }

  peek() {
    if(this.empty()) {
      return null
    }

    return this.stack[this.top]
  }

  search(element) {
    for(let i = this.top; i >= 0; i--) {
      if(this.stack[i] === element) {
        return this.top -i
      }
    }
    
    return -1
  }
}

const stack = new Stack(5)
stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.peek())
console.log(stack.search(20))
console.log(stack.pop())
console.log(stack.empty())
console.log(stack.search(100))