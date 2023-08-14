const inPutString = '"This is the output of TypeScript Project"';
export function renderedOut (what: string = inPutString): string {
  return `\n******************************************* \n${what}!  \n`;
}
console.log(renderedOut());


//start
//===================================================================//

//***
// import { remainder } from "./practice/aVeryEasy/a2";
// const out = remainder(1, 1);
// const testCases = [
//   [10, 2],
//   [20, 3],
//   [100, 20]
// ]
// for (let i = 0; i < testCases.length; i++) {
//   const out = remainder(testCases[i][0], testCases[i][1])
//   console.log(`testCase: ${JSON.stringify(testCases[i])}, outPut: ${out}`)
// }
//***


//***
import { reverse } from "./practice/aVeryEasy/a3";
const out = reverse;
const testCases = [
  [1, 2, 3]
]
for (let i = 0; i < testCases.length; i++) {
  const out = reverse(testCases[i][0])
  console.log(`testCase: ${JSON.stringify(testCases[i])}, outPut: ${out}`)
}
//***







//end
//===================================================================//
console.log(`*******************************************\n`)