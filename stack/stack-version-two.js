class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.count - 1];
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const item = this.items[this.count];
    delete this.items[this.count];
    this.count--;
    return item;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }
}
