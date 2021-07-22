/*

输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

*/


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

export class ListNode<T>{
  public val: T;
  public next?: ListNode<T>; 
  constructor(val: T, next: ListNode<T>){
    this.val = val;
    this.next = next || null;
  }
}
export function mergeTwoLists(l1: ListNode<number>, l2: ListNode<number>) {
  let dummy = new ListNode(0, null);
  let current: ListNode<number> = dummy;
  while(l1 != null && l2 !=null){
      if(l1.val <= l2.val){
          current.next = l1;
          l1 = l1.next
      }else{
          current.next = l2;
          l2 = l2.next
      }
      current = current.next;
  }
  if(l1!= null) current.next = l1;
  if(l2!= null) current.next = l2;
  return dummy.next;
};