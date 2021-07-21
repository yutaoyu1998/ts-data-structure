import LinkedList from "./index";

export function linkedTest() {
  console.log("单链表测试----------");
  const linkedList = new LinkedList();
  linkedList.push(1);
  linkedList.push(2);
  linkedList.push(3);
  linkedList.push(4);
  linkedList.push(5);
  console.log(linkedList.toString());
  console.log("单链表反转----------");
  linkedList.reverse()
  console.log(linkedList.toString());
  console.log("单链表测试环路----------");
  console.log("当前是否是环路", linkedList.isCircle() != null);
  console.log("当前是否是环路", linkedList.detectCycle() != null);
}
