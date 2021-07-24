/**
 * 循环队列
 * head
 * tail
 * count
 * 如何判断循环队列满
 * head = (tail + 1) % count
 */

export default class CircleQueue<T> {
  private head: number;
  private tail: number;
  private capacity: number; // 容量
  private data: any;

  constructor(capacity: number) {
    this.data = {};
    this.capacity = capacity;
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element: T) {
    if ((this.tail + 1) % this.capacity === this.head) {
      return;
    }
    this.data[this.tail] = element;
    this.tail = (this.tail + 1) % this.capacity;
  }

  dequeue() {
    if (this.tail === this.head) return undefined;
    const result = this.data[this.head];
    delete this.data[this.head];
    this.head = (this.head + 1) % this.capacity;
    return result;
  }

  toString() {
    if (this.head === this.tail) return "";
    let str = this.data[this.head];
    for (let i = this.head + 1; i !== this.tail; i = (i + 1) % this.capacity) {
      str = `${str}, ${this.data[i]}`;
    }
    return str;
  }
}
