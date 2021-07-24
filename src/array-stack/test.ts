import ArrayStack from "./index";

export function arrayStackTest() {
  console.log("#####栈2测试######");
  const stack = new ArrayStack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  stack.push(6);
  stack.push(7);
  stack.push(8);
  console.log(stack.toString());
  console.log(stack.size());
  stack.pop();
  stack.pop();
  console.log(stack.toString());
  console.log(stack.size());
}
