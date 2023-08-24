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
//   [1, 3],
//   [3, 4],
//   [-9, 45],
//   [5, 5]
// ]
// for (let i = 0; i < testCases.length; i++) {
//   const out = remainder(testCases[i][0], testCases[i][1])
//   console.log(`testCase: ${JSON.stringify(testCases[i])}, outPut: ${JSON.stringify(out)}`)
// }
//***


//*** "a3"
// import { reverse } from "./practice/aVeryEasy/a3";
// const testCases = [
//   [1, 2, 3, 4],
//   [9, 9, 2, 3, 4],
//   []
// ]
// for (let i = 0; i < testCases.length-1; i++) {
//   const testCase: any[] = testCases[i];
//   console.log(`testCases[i = ${i}), testCase: ${JSON.stringify(testCase)}`);
//   const out = reverse(testCase);
//   console.log(`outPut: ${JSON.stringify(out)}\n`)
// }
//***


//*** "a4"
// import { oddOrEven } from "./practice/aVeryEasy/a4";
// const testCases = [
//   "apples",
//   "pears",
//   "cherry"
// ]
// for (let i = 0; i < testCases.length; i++) {
//   const testCase: string = testCases[i]
//   console.log(`i: ${i}, testCase: ${testCase}`)
//   const out = oddOrEven(testCase);
//   console.log(`testCaseLength: ${JSON.stringify(testCases[i].length)}, ("value is even number?") outPut: ${JSON.stringify(out)}`)
// }
//***



//*** "a5 with multiple testCasesArr"
// import { deStructureArr } from "./practice/aVeryEasy/a5";
// const testCasesArr = [
//  [1,2,3,4,5,6],
//  [6,7,8,9,10,11],
//  [11,12,13,14,15,16,17]
// ]

// for (let i = 0; i < testCasesArr.length; i++){
//   const testCase = testCasesArr[i]
//   const out = deStructureArr(testCase);
//   console.log(`outPut: ${JSON.stringify(out)}\n`) 
// }
//***


//*** "a6"
// import { inchesToFeet } from "./practice/aVeryEasy/a6";
// const testCasesArr = [
//  324,
//  12,
//  36
// ]

// for (let i = 0; i < testCasesArr.length; i++){
//   const testCase = testCasesArr[i]
//   console.log(`NumberToConvert: ${JSON.stringify, testCase} inches`);
//   const out = inchesToFeet(testCase);
//   console.log(`outPut: ${JSON.stringify(out)} feet \n`) 
// }
//***


//*** "a7"
// import { arrToStr } from "./practice/aVeryEasy/a7";
// const testCasesArr = [
//  [1, 2, 3, 4, 5, 6],
//  ["radius", "area", "c", "d", "e", "f"],
//  [1, 2, 3, "radius", "s", "dAAAA"]
// ]

// for (let i = 0; i < testCasesArr.length; i++){
//   const testCase = testCasesArr[i];
//   console.log(`ArrayToConvert: ${JSON.stringify(testCase)}`);
//   const out = arrToStr(testCase);
//   console.log(`outPutText: ${out} \n`) 
// }
//***


//*** "a8"
// import { concats } from "./practice/aVeryEasy/a8";
// const testCasesArr = [
//  [[1, 3, 5], [2, 6, 8]],
//  [[7, 8], [10, 9, 1, 1, 2]],
//  [[4, 5, 1], [3, 3, 3, 3, 3]],
//  [[1, 2, 3], [4, 5, 6 , 7, 8, 9]]
// ]

// const testCase = [];
// for (let i = 0; i < testCasesArr.length; i++){
//   const caSe = testCasesArr[i];
//   let radius = testCasesArr[i][0];
//   let area = testCasesArr[i][1];
//   console.log(`ArrayToConcat, radius:${JSON.stringify(caSe[0])} and area:${JSON.stringify(caSe[1])}`);
//   const out = concats(radius, area);
//   console.log(`outPut: ${JSON.stringify(out)} \n`)
// }
//***


//*** "a9"
// import { circleOrSquare } from "./practice/aVeryEasy/a9";
// const testCasesArr = [
//  [16, 625],
//  [5, 100],
//  [8, 144]
// ]

// for (let i = 0; i < testCasesArr.length; i++){
//   const testCase = testCasesArr[i];
//   const [radius, area] = testCase;
//   const cirCrf = Math.round(2 * Math.PI * radius);
//   const squCrf = Math.round((Math.sqrt(area)) * 4);
//   const sqrtSym = "\u221A";
//   console.log(`ArrayToCheck, circleRadius:(${JSON.stringify, radius}) & squareArea:(${area})`);
//   console.log(`cirCrf: 2 * 3.14 * ${JSON.stringify, radius} = ${cirCrf}`);
//   console.log(`squCrf: (${sqrtSym}${JSON.stringify, area}) * 4 = ${squCrf}`);
//   const out = circleOrSquare(radius,area);
//   console.log(`finalCheck: cirCrf > squCrf, outPut: ${JSON.stringify(out)} \n`) 
// }
//***


//*** "a10"
import { firstLast } from "./practice/aVeryEasy/a10";
const testCasesArr = [
 "Michelle",
 "Shinta",
 "Wayan"
]

for (let i = 0; i < testCasesArr.length; i++){
  const testCase = testCasesArr[i];
  const [radius,area, ...rest] = testCase;
  const z = testCase[testCase.length-1];
  console.log(`inputToConcat, firstElm:(${JSON.stringify, radius}) & lastElm:(${z})`);
  const out = firstLast(testCase);
  console.log(`outPut: ${JSON.stringify(out)} \n`) 
}
//***


//*** "a11"
// import { oneHeadMoreTail } from "./practice/aVeryEasy/a11";
// const testCasesArr = [
//  ["1", "2", "3", "4", "5"],
//  ['6', "7", "8", "9"],
//  ["head", "neck", "shoulder", "stomach", "tail"]
// ]

// for (let i = 0; i < testCasesArr.length; i++){
//   const testCase = testCasesArr[i];
//   const [radius, ...rest] = testCase;
//   const head = radius;
//   const tail = rest;
//   console.log(`input: ${testCase} \nhead:(${JSON.stringify, radius}), tail:(${tail})`);
//   const out = oneHeadMoreTail(testCase);
//   console.log(`outPut: ${JSON.stringify(out)}\n`)
// }
//***


//*** "a12"
// import { getMultipliedArr } from "./practice/aVeryEasy/a12";
// const testCasesArr = [
//  [1, 2, 3, 4, 5],
//  [6, 7, 8],
//  [0, 9, 10]
// ]

// for (let i = 0; i < testCasesArr.length; i++){
//   const testCase = testCasesArr[i];
//   // [radius] = testCase; 
//   testCase[i] = testCase[i] * 2;
//   console.log(`testCase: ${testCase} \nmultiplyByTwo:(${JSON.stringify(testCase)}*2)`);
//   const out = getMultipliedArr(testCase);
//   console.log(`outPut: ${JSON.stringify(out)}\n`)
// }
//***


//*** "a13"
// import { evenOrOdd } from "./practice/aVeryEasy/a13";
// const testCasesArr = [
//  [1, 2, 3, 4],
//  [6, 7, 8],
//  [0, 8, 10]
// ]
// for (let i = 0; i < testCasesArr.length; i++){
//   const testCase = testCasesArr[i];
//   const out = evenOrOdd(testCase);
//   console.log(`testCase: ${testCase} \nsumArray:(SUM${JSON.stringify(testCase)})=${out[0]}`);
//   console.log(`outPut: ${JSON.stringify(out[1])}\n`)
// }
//***


//*** "a14"
// import { sumMinimums } from "./practice/aVeryEasy/a14";
// const testCasesArr = [
//  [1, 2, 3, 4, 5],
//  [6, 7, 8],
//  [0, 9, 10]
// ]

// for (let i = 0; i < testCasesArr.length; i++){
//   const testCase = testCasesArr[i];
//   const out = sumMinimums(testCase);
//   console.log(`testCase: ${testCase} \n(mindex${[i]} : ${JSON.stringify(out)})`);
// } 
// // let minTestCasesArr = [];
// for(let i=0; i<testCasesArr.length; i++){
//   // const minTestCasesArr = [];
//   const testCase = testCasesArr[i];
//   const out = sumMinimums(testCase); 
//   // let minTestCasesArr = minTestCase[i];
//   console.log(`   \noutPut: ${JSON.stringify(out)}\n`);
// }
//***


//*** "a15"
// import { oddSum } from "./practice/aVeryEasy/a15";
// const testCasesArr = [
//  [1, 2, 3, 4, 5],
//  [6, 7, 8],
//  [0, 9, 10]
// ]

// for (let i = 0; i < testCasesArr.length; i++){
//   const testCase = testCasesArr[i];
//   // [radius] = testCase; 
//   // testCase[i] = testCase[i] * 2;
//   console.log(`testCase: ${testCase} \nsumArray:(SUM${JSON.stringify(testCase)})`);
//   const out = oddSum(testCase);
//   console.log(`outPut: ${JSON.stringify(out)}\n`)
// }
//***


//*** "a16"
// import { removeNull } from "./practice/aVeryEasy/a16";
// const testCasesArr = [
//  [1, 2, 3, 4, 5],
//  [6, 7, 8],
//  [0, 9, 10]
// ]

// for (let i = 0; i < testCasesArr.length; i++){
//   const testCase = testCasesArr[i];
//   // [radius] = testCase; 
//   // testCase[i] = testCase[i] * 2;
//   console.log(`testCase: ${testCase} \nsumArray:(SUM${JSON.stringify(testCase)})`);
//   const out = removeNull(testCase);
//   console.log(`outPut: ${JSON.stringify(out)}\n`)
// }
//***


//*** "a17"
// import { leapYear } from "./practice/aVeryEasy/a17";
// const testCasesArr = [
//  [1, 2, 3, 4, 5],
//  [6, 7, 8],
//  [0, 9, 10]
// ]

// for (let i = 0; i < testCasesArr.length; i++){
//   const testCase = testCasesArr[i];
//   // [radius] = testCase; 
//   // testCase[i] = testCase[i] * 2;
//   console.log(`testCase: ${testCase} \nsumArray:(SUM${JSON.stringify(testCase)})`);
//   const out = leapYear(testCase);
//   console.log(`outPut: ${JSON.stringify(out)}\n`)
// }
//***


// example of console logging radius very basic & simple loop :
// for (let i = 0; i < 3; i++) {
//   console.log(i)
// }





//end
//===================================================================//
console.log(`*******************************************\n`)