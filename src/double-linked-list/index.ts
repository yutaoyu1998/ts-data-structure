/**
 * 双链表
 */

import { defaultEquals, IEqualsFunction } from "../util";
import LinkedList from "../linked-list";
import { DoubleNode } from "../models/linked-list";

export default class DoubleLinkedList<T> extends LinkedList<T> {
  protected head: DoubleNode<T> | undefined;
  protected tail: DoubleNode<T> | undefined;

  constructor(protected equalsFn: IEqualsFunction<T> = defaultEquals) {
    super(equalsFn);
  }

  push(element: T) {
    const node = new DoubleNode(element);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.count++;
    return node;
  }

  insert(element: T, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new DoubleNode(element);
      let current = this.head;

      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          this.head.prev = node;
          this.head = node;
        }
      } else if (index === this.count) {
        current = this.tail;
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      } else {
        const previos = this.getElementAt(index - 1);
        current = previos.next;
        node.next = previos.next;
        previos.next = node;

        current.prev = node;
        node.prev = previos;
      }

      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        // 头节点
        this.head = this.head.next;
        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      } else if (index === this.count - 1) {
        // 最后节点
        current = this.tail;
        this.tail.prev = current.prev;
        this.tail.next = undefined;
      } else {
        // debugger;
        const previous = this.getElementAt(index - 1);
        console.log('previous', previous)
        current = previous.next;
        previous.next = current.next;
        current.next.prev = previous;
      }
      return current;
    }
    return undefined;
  }

  indexOf(element: T) {
    let current = this.head;
    let index = 0;

    while (current != null) {
      if (this.equalsFn(element, current.element)) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  clear() {
    super.clear();
    this.tail = undefined;
  }

  toString() {
    if (this.head == null) {
      return "";
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    while (current != null) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }

  inverseToString() {
    if (this.tail == null) {
      return "";
    }
    let objString = `${this.tail.element}`;
    let previous = this.tail.prev;
    while (previous != null) {
      objString = `${objString},${previous.element}`;
      previous = previous.prev;
    }
    return objString;
  }
}
