class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.size === 0) {
      this.bottom = newNode;
      this.top = this.bottom;
    } else {
      this.top.next = newNode;
      this.top = newNode;
    }

    return ++this.size;
  }

  pop() {
    if (this.size === 0) return undefined;
    
    let targetNode = this.bottom;
    
    if (this.bottom === this.top) {
      this.bottom = null;
      this.top =null;
    } else {
      let prevNode = targetNode;
      while (targetNode.next) {
        prevNode = targetNode;
        targetNode = targetNode.next;
      }
      this.top = prevNode;
      this.top.next = null;
    }

    this.size--;
    return targetNode.value;
  }
}

const stack = new Stack();

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (this.size === 0) {
      this.front = newNode;
      this.rear = this.front;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }

    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) return undefined;
    
    const targetNode = this.front;

    if (this.front === this.rear) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.front.next;
    }
    this.size--;
    return targetNode.value;
  }
}

const queue = new Queue();