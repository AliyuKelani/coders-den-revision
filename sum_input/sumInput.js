/*
Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.

Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.

Calculates and returns the sum of array items.

P.S. A zero 0 is a valid number, please don’t stop the input on zero.
*/

const prompt = require("prompt-sync")();

// James
let res = 0,
  uI = 0;
// while (!Number.isNaN(uI)) {
//   res += uI;
//   uI = Number(
//     prompt("Enter a number, any non number will end the process -> ")
//   );
// }

// for (; !Number.isNaN(uI); ) {
//   res += uI;
//   uI = Number(
//     prompt("Enter a number, any non number will end the process -> ")
//   );
// }

// for (; true; ) {
//   res += uI;
//   uI = Number(
//     prompt("Enter a number, any non number will end the process -> ")
//   );
//   if (Number.isNaN(uI)) {
//     break;
//   }
// }

console.log(res);

// Nonso
// let uInt = Number(prompt("Pls enter a num, use any non-numeric char to exit."))
// let nums = []
// while (!isNaN(uInt)) {

//   uInt = Number(
//     prompt("Pls enter a num, use any non-numeric char to exit.")
//   );
// }
