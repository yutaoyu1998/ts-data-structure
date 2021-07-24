import DoubleLinkedList from "./index";

export function doubleLinkedTest(){
  const linkedList = new DoubleLinkedList();
  console.log('#####双链表测试######');
  linkedList.push(1);
  linkedList.push(2);
  linkedList.push(3);
  linkedList.push(4);
  linkedList.push(5);
  linkedList.push(6);
  linkedList.push(7);
  linkedList.push(8);
  console.log(linkedList.toString());
  console.log('双链表反转');
  console.log(linkedList.inverseToString());
  console.log('双链表删除第四个节点')
  linkedList.removeAt(4);
  console.log(linkedList.toString());
  console.log('双链表查询8')
  console.log(linkedList.indexOf(8));
}