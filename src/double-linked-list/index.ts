/**
 * 双链表
 */

import { defaultEquals, IEqualsFunction } from "../util";
import LinkedList from "../linked-list";
import { DoubleNode } from "../models/linked-list";

export class DoubleLinkedList<T> extends LinkedList<T> {
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
}
