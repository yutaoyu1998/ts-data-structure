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
  console.log("单链表获取中间节点----------");
  console.log(linkedList.toString());
  console.log('中间节点', linkedList.getMiddleNode())
  console.log('中间节点', linkedList.getMiddleNode2())
  console.log("单链表删除倒数第n节点----------");
  console.log(linkedList.toString());
  console.log('倒数第四个节点', linkedList.delReverseNode(4))
  console.log(linkedList.toString());
}
