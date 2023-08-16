const inPutString = '"This is the output of TypeScript Project"';
export function renderedOut (what: string = inPutString): string {
  return `\n******************************************* \n${what}!  \n`;
}
console.log(renderedOut());


//start
//===================================================================//

//*** "a2"
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


//*** "a3"
// import { reverse } from "./practice/aVeryEasy/a4";
// // const out = reverse;
// const testCases = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// for (let i = 0; i < testCases.length; i++) {
//   const testCase: any[] = testCases[i]
//   console.log(`i: ${i}, testCase: ${testCase}`)
//   // console.log(case)
//   const out = reverse(testCase)
//   console.log(`testCase: ${JSON.stringify(testCases[i])}, outPut: ${out}`)
// }
//***


//*** "a4"
// import { oddOrEven } from "./practice/aVeryEasy/a4";
// const testCases = [
//   "apples",
//   "bananas",
//   "cherry"
// ]
// for (let i = 0; i < testCases.length; i++) {
//   const testCase: string = testCases[i]
//   console.log(`i: ${i}, testCase: ${testCase}`)
//   // console.log(case)
//   const out = oddOrEven(testCase)
//   console.log(`testCase: ${JSON.stringify(testCases[i])}, outPut: ${out}`)
// }
//***


//*** "a5"
// import { deStructureArr } from "./practice/aVeryEasy/a5";
// const testCases = [1,2,3,4,5,]
// //  [1,2,3,4,5,],
// //  [6,7,8,9,10],
// //  [11,12,13,14,15]

//   const out = deStructureArr(testCases);
//   console.log(`outPut: ${out}`)
//***


//*** "a51"
import { multyHeadNTail } from "./practice/aVeryEasy/a51";
const testCases = [
 [1,2,3,4,5,],
 [6,7,8,9,10,11],
 [11,12,13,14,15,16,17]
]

for (let i = 0; i < testCases.length; i++){
  
  console.log(`origin: ${JSON.stringify, testCases[i]}   length: ${testCases[i].length}`);
  const out = multyHeadNTail(testCases);
  console.log(`outPut: ${out}\n`) 
}

  
//***






// example of console logging a very basic & simple loop :
// for (let i = 0; i < 3; i++) {
//   console.log(i)
// }





//end
//===================================================================//
console.log(`*******************************************\n`)