/**
 * 通过对象队列-先进先出
 */

export default class Queue<T> {
  private data: any;
  private count: number;
  private head: number; // 头， 出队+1

  constructor() {
    this.data = {};
    this.count = 0;
    this.head = 0;
  }

  enqueue(element: T) {
    this.data[this.count++] = element;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.data[this.head];
    delete this.data[this.head];
    this.head++;
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.data[this.head];
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.data = {};
    this.count = 0;
    this.head = 0;
  }

  size() {
    return this.count - this.head;
  }

  toString(){
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.data[this.head]}`;
    for (let i = this.head + 1; i < this.count; i++) {
      objString = `${objString},${this.data[i]}`;
    }
    return objString;
  }
}
