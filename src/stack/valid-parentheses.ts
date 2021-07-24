/*

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s: string) {
  let arr = [];
  let len = s.length;
  for (let i = 0; i < len; i++) {
      let str = s.charAt(i);
      if (str == '{' || str == '(' || str == '[') {
          arr.push(str)
      } else if (str == '}' || str == ')' || str == ']') {
          let tmp = arr.pop();
          if ((str == '}' && tmp != '{') || (str == ']' && tmp != '[') || (str == ')' && tmp != '(')) {
              return false
          }
      }
  }
  return arr.length === 0
};