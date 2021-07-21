/**
 * 链表中环
 * 1、迭代链表（isCircle）
 * 2、快慢指针解法
 *
 * 定义慢指针，速度是n，快指针速度是2n，如果链表中有环，那么慢指针和快指针一定会相遇
 * 假设：链表外距离是 a， 慢指针进入环中走的距离是 b， (剩下距离是 c), 快指针此时走了n圈
 * 快指针走过的距离是 a + n (b + c) + b = a + (n + 1) b + nc
 * 慢指针走的距离是  a + b, 又因为快指针走的距离是慢指针的2倍
 * 所以 2(a + b) = a + (n + 1)b + nc
 * a = c + (n - 1)(b + c)
 * 从相遇点到入环点的距离加上 n−1 圈的环长，恰好等于从链表头部到入环点的距离。
 *
 * 因此，当发现 slow 与 fast 相遇时，我们再额外使用一个指针 ptr。
 * 起始，它指向链表头部；随后，它和 slow 每次向后移动一个位置。最终，它们会在入环点相遇
 */

function detectCycle() {
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
