/**
 * 通过对象来实现栈
 */

export default class Stack<T>{
  private count: number;
  private data: any;

  constructor(){
    this.count = 0;
    this.data = {};
  }

  push(element: T){
    this.data[this.count++] = element;
  }

  pop(){
    if(this.isEmpty()){
      return undefined;
    }
    const result =  this.data[this.count];
    delete this.data[this.count];
    this.count--;
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.data[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    /* while (!this.isEmpty()) {
      this.pop();
    } */

    this.data = {};
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.data[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.data[i]}`;
    }
    return objString;
  }
}