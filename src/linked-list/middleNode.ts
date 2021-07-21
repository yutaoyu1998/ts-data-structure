/**
 * 获取中间节点
 * 1、第一次循环计算个数n，第二次循环到 n/2 返回节点
 * 2、快慢指针，快指针的速度是慢指针的2倍速，快指针到达重点，慢指针 n / 2
 */

// 获取链表中间节点
function getMiddleNode() {
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

function getMiddleNode2() {
  let slow = this.head;
  let fast = this.head;
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}