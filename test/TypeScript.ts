let x: [string, number];
x = ['hello', 10]; // OK
console.log(x);
export default x;
// TS file must allow undef
/* eslint no-undef:0 */
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(c);
