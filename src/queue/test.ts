import Queue from "./index";

export function queueTest() {
  console.log("######队列测试######");
  const queue = new Queue();
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
