// 单链表
export class Node<T> {
  constructor(public element: T, public next?: Node<T>) {}
}

// 双链表
export class DoubleNode<T> extends Node<T> {
  constructor(
    public element: T,
    public prev: DoubleNode<T>,
    public next: DoubleNode<T>
  ) {
    super(element, next);
  }
}
