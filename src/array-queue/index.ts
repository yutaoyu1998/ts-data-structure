/**
 * 通过对象队列-先进先出
 */

export default class ArrayQueue<T> {
  private data: T[];

  constructor() {
    this.data = [];
  }

  enqueue(element: T) {
    this.data.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.data.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.data[0];
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.data = [];
  }

  size() {
    return this.data.length;
  }

  toString(){
    return this.data.toString();
  }
}
