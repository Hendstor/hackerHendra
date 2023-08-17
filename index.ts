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
// const testCase = [1,2,3,4,5,]

//   const out = deStructureArr(testCase);
//   console.log(`outPut: ${out}`)
//***


//*** "a5 with multiple testCasesArr"
// import { deStructureArr } from "./practice/aVeryEasy/a5";
// const testCasesArr = [
//  [1,2,3,4,5,],
//  [6,7,8,9,10,11],
//  [11,12,13,14,15,16,17]
// ]

// for (let i = 0; i < testCasesArr.length; i++){
//   const testCase = testCasesArr[i]
//   // console.log(`origin: ${JSON.stringify, testCase}   length: ${testCasesArr[i].length}`);
//   const out = deStructureArr(testCase);
//   console.log(`outPut: ${out}\n`) 
// }
//***


//*** "a6"
// import { inchesToFeet } from "./practice/aVeryEasy/a6";
// const testCasesArr = [
//  10,
//  456,
//  789
// ]

// for (let i = 0; i < testCasesArr.length; i++){
//   const testCase = testCasesArr[i]
//   console.log(`NumberToConvert: ${JSON.stringify, testCase} inches`);
//   const out = inchesToFeet(testCase);
//   console.log(`outPut: ${out} feet \n`) 
// }
//***


//*** "a7"
// import { arrToStr } from "./practice/aVeryEasy/a7";
// const testCasesArr = [
//  ['1', '2', '3'],
//  [4,5,6],
//  ["seven", 8, "nine"]
// ]

// for (let i = 0; i < testCasesArr.length; i++){
//   const testCase = testCasesArr[i];
//   console.log(`ArrayToConvert: ${JSON.stringify, testCase}`);
//   const out = arrToStr(testCase);
//   console.log(`outPutText: ${out} \n`) 
// }
//***


//*** "a8"
// import { concat } from "./practice/aVeryEasy/a8";
// const testCasesArr = [
//  [['1', '2', '3'], [4,5,6]],
//  [["seven", 8, "nine"], [10, 11, 12]],
//  [[13, "fourTeen", 15], [16, "sevenTeen", 18]]
// ]

// for (let i = 0; i < testCasesArr.length; i++){
//   const testCase = testCasesArr[i];
//   const [a, b] = testCase;
//   console.log(`ArrayToConcat, Arr1:(${JSON.stringify, a}) and Arr2:(${b})`);
//   const out = concat(a,b);
//   console.log(`outPutText: ${out} \n`) 
// }
//***


//*** "a9"
import { circleOrSquare } from "./practice/aVeryEasy/a9";
const testCasesArr = [
 [2, 4],
 [5, 150],
 [10, 25]
]

for (let i = 0; i < testCasesArr.length; i++){
  const testCase = testCasesArr[i];
  const [a, b] = testCase;
  const cirA = Math.round(2 * 3.14 * a);
  const cirB = Math.round((Math.sqrt(b)) * 4);
  const sqrtSym = "\u221A";
  console.log(`ArrayToCheck, circleRadius:(${JSON.stringify, a}) & squareArea:(${b})`);
  console.log(`circleCrf: 2 * 3.14 * ${JSON.stringify, a} = ${cirA}`);
  console.log(`squareCrf: (Math.sqrt(${JSON.stringify, b})) * 4 = ${cirB}`);
  const out = circleOrSquare(a,b);
  console.log(`finalCheck: circleCrf > squareCrf, outPut: ${out} \n`) 
}
//***






// example of console logging a very basic & simple loop :
// for (let i = 0; i < 3; i++) {
//   console.log(i)
// }





//end
//===================================================================//
console.log(`*******************************************\n`)