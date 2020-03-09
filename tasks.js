console.clear();

// Напишите функцию-валидатор скобок.

function check (brackets) {
  for (var l = brackets; l.length>0; (l = l.slice(1, l.length - 1)))
    if (l[0] === '(' && l[l.length-1] !==')'
      || l[0] === '{' && l[l.length-1] !=='}'
      || l[0] === '[' && l[l.length-1] !==']')
      return undefined;
  return 1
}

console.log(check('{[()]}')); // 1
console.log(check('{[(])}')); // undefined

//Решение:
// function check (brackets) {
//   let stack = [];
//   for (let i = 0; i < s.length; i++) {
//     switch(brackets.charAt(i)) {
//       case '(':
//         stack.push(')');
//         break;
//       case '{':
//         stack.push('}');
//         break;
//       case '[':
//         stack.push(']');
//         break;
//       default:
//         if (stack.pop() !== brackets.charAt(i)) {
//            return false;
//         }
//     }
//   }
//   return stack.length === 0
// }
