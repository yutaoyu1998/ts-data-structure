/**
 * 链表
 */
import { Node } from "../models/linked-list";
import { defaultEquals, IEqualsFunction } from "../util";

export default class LinkedList<T> {
  protected count = 0;
  protected head: Node<T> | undefined;

  constructor(protected equalsFn: IEqualsFunction<T> = defaultEquals) {}

  // 链表添加元素
  push(element: T) {
    // debugger
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
    return node;
  }

  // 返回第index个元素
  getElementAt(index: number) {
    // debugger
    if (index >= 0 && index <= this.count) {
      let dummy = new Node(null, this.head);
      for (let i = 0; i < index && dummy != null; i++) {
        dummy = dummy.next;
      }
      return dummy;
    }
    return undefined;
  }

  // 在index位置插入元素
  insert(element: T, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  // 删除下标为index的数据
  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      return current;
    }
    return undefined;
  }

  // 删除某个元素
  remove(element: T) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  }

  // 返回某一个元素的下标
  indexOf(element: T) {
    let current = this.head;

    for (let i = 0; i < this.size() && current != null; i++) {
      if (this.equalsFn(current.element, element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  isEmpty() {
    return this.count === 0;
  }

  // 链表反转
  reverse() {
    let current = this.head;
    let previous = null;
    for (let i = 0; i < this.size() && current != null; i++) {
      const next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }

  // 获取链表中间节点
  getMiddleNode() {
    let n = 0;
    let current = this.head;
    while (current != null) {
      current = current.next;
      n++;
    }
    let m = 0;
    current = this.head;
    while (m < Math.trunc(n / 2)) {
      m++;
      current = current.next;
    }
    return current;
  }

  getMiddleNode2() {
    let slow = this.head;
    let fast = this.head;
    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }

  // 删除倒数第n个节点
  delReverseNode(index: number) {
    if (index > this.size()) {
      return null;
    }
    let first = this.head;
    let second = this.head;
    for (let i = 0; i < index; i++) {
      first = first.next;
    }
    while (first.next != null) {
      first = first.next;
      second = second.next;
    }
    const node = second.next;
    second.next = node.next;
    return node;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  // 判断链表中是否存在环路
  isCircle() {
    const visited = new Set();
    let current = this.head;
    while (current != null) {
      if (visited.has(current.element)) {
        return current.element;
      }
      visited.add(current.element);
      current = current.next;
    }
    return null;
  }

  // 链表中是否存在环路：快慢指针解法
  detectCycle() {
    // debugger
    if (this.head == null) {
      return null;
    }
    let slow = this.head,
      fast = this.head;
    while (fast != null) {
      slow = slow.next;
      if (fast.next != null && fast.next.next != null) {
        fast = fast.next.next;
      } else {
        return null;
      }
      if (fast.element == slow.element) {
        let p = this.head;
        while (p.element !== slow.element) {
          p = p.next;
          slow = slow.next;
        }
        return p.element;
      }
    }
    return null;
  }

  clear() {
    this.head = undefined;
    this.count = 0;
  }

  toString() {
    if (this.head == null) {
      return "";
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }
}
