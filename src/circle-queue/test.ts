import CircleQueue from "./index";

export function circleQueueTest() {
  console.log("######循环队列测试######");
  const queue = new CircleQueue(8); // 实际可以存储 n - 1 个元素
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  queue.enqueue(6);
  queue.enqueue(7);
  queue.enqueue(8);
  console.log(queue.toString());
  queue.dequeue();
  queue.dequeue();
  console.log(queue.toString());
}
