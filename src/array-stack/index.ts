/**
 * 数组实现栈
 */

export default class ArrayStack<T>{
  private data: T[];

  constructor(){
    this.data = [];
  }

  push(element: T){
    this.data.push(element);
  }

  pop(){
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  isEmpty() {
    return this.data.length === 0;
  }

  size() {
    return this.data.length;
  }

  clear() {
    this.data = [];
  }

  toArray() {
    return this.data;
  }

  toString() {
    return this.data.toString();
  }

}