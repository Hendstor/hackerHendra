const inPutString = '"This is the output of TypeScript Project"';
export function renderedOut (what: string = inPutString): string {
  return `\n******************************************* \n${what}!  \n`;
}
console.log(renderedOut());


//start
//===================================================================//

//*** "a2"
// import { remainder } from "./practice/aVeryEasy/a2";
// console.log(`*a2*\n`);
// const out = remainder(1, 1);
// const testCasesArr = [
//   [13, 5],
//   [-13, 5],
//   [4, 2],
//   [-4, 2]
// ]

// for (let i = 0; i < testCasesArr.length; i++) {
//   const testCase = testCasesArr[i];
//   const caseDiv = `${testCase[0]/testCase[1]}`;
//   const resDiv = parseInt(caseDiv);                        // result of division
//   const resMult = resDiv*testCase[1];                     // result of multyplication
//   const resDecr = testCase[0] - resMult;                  // result of Decrement
  
//   console.log(`testCase: ${JSON.stringify(testCase)}`);
//   console.log(`resultDiv: (${JSON.stringify(testCase[0])})/(${JSON.stringify(testCase[1])}) = ${JSON.stringify(resDiv)}`);
//   console.log(`resultMult: (${JSON.stringify(resDiv)})*(${JSON.stringify(testCase[1])}) = ${JSON.stringify(resMult)}`);
//   console.log(`resultDecr: (${testCase[0]})-(${resMult}) = ${JSON.stringify(resDecr)}`);
//   const out = remainder(testCase[0], testCase[1]);
//   console.log(`outPut: ${JSON.stringify(out)}\n`)
// }
//***


//*** "a3"
// import { reverse } from "./practice/aVeryEasy/a3";
// console.log(`*a3*\n`);
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
// console.log(`*a4*\n`);
// const testCases = [
//   "apples",
//   "pears",
//   "cherry"
// ]

// for (let i = 0; i < testCases.length; i++) {
//   const testCase: string = testCases[i];

//   console.log(`i: ${i}, testCase: ${testCase}`);
//   const out = oddOrEven(testCase);
//   console.log(`length: ${JSON.stringify(testCases[i].length)}, ("value is even number?")`);
//   console.log(`outPut: ${JSON.stringify(out)}\n`)
// }
//***



//*** "a5"
// import { deStructureArr } from "./practice/aVeryEasy/a5";
// console.log(`*a5*\n`);
// const testCasesArr = [
//  [1,2,3,4,5,6],
//  [6,7,8,9,10,11],
//  [11,12,13,14,15,16,17]
// ]

// for (let i = 0; i < testCasesArr.length; i++){
//   const testCase = testCasesArr[i];
//   const newHead = testCasesArr[i][testCasesArr[i].length-1];
//   const newTail = testCasesArr[i][0];

//   console.log(`testCase: ${JSON.stringify(testCase)}`);
//   console.log(`newHead: ${JSON.stringify(newHead)},  newTail: ${JSON.stringify(newTail)}`);
//   const out = deStructureArr(testCase);
//   console.log(`outPut: ${JSON.stringify(out)}\n`) 
// }
//***


//*** "a6"
// import { inchesToFeet } from "./practice/aVeryEasy/a6";
// console.log(`*a6*\n`);
// const testCasesArr = [
//  324,
//  12,
//  36
// ]

// for (let i = 0; i < testCasesArr.length; i++){
//   const testCase = testCasesArr[i]

//   console.log(`testCase: ${JSON.stringify, testCase} inches`);
//   const out = inchesToFeet(testCase);
//   console.log(`outPut: ${JSON.stringify(out)} feet \n`) 
// }
//***


//*** "a7"
// import { arrToStr } from "./practice/aVeryEasy/a7";
// console.log(`*a7*\n`);
// const testCasesArr = [
//  [1, 2, 3, 4, 5, 6],
//  ["a", "b", "c", "d", "e", "f"],
//  [1, 2, 3, "a", "s", "dAAAA"]
// ]

// for (let i = 0; i < testCasesArr.length; i++){
//   const testCase = testCasesArr[i];

//   console.log(`testCase: ${JSON.stringify(testCase)}`);
//   const out = arrToStr(testCase);
//   console.log(`outPutText: ${out} \n`) 
// }
//***


//*** "a8"
// import { concats } from "./practice/aVeryEasy/a8";
// console.log(`*a8*\n`);
// const testCasesArr = [
//  [[1, 3, 5], [2, 6, 8]],
//  [[7, 8], [10, 9, 1, 1, 2]],
//  [[4, 5, 1], [3, 3, 3, 3, 3]],
//  [[1, 2, 3], [4, 5, 6 , 7, 8, 9]]
// ]

// const testCase = [];
// for (let i = 0; i < testCasesArr.length; i++){
//   const testCase = testCasesArr[i];
//   let radius = testCasesArr[i][0];
//   let area = testCasesArr[i][1];

//   console.log(`testCase, radius:${JSON.stringify(testCase[0])} and area:${JSON.stringify(testCase[1])}`);
//   const out = concats(radius, area);
//   console.log(`outPut: ${JSON.stringify(out)} \n`)
// }
//***


//*** "a9"
// import { circleOrSquare } from "./practice/aVeryEasy/a9";
// console.log(`*a9*\n`);
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

//   console.log(`testCase, circleRadius:(${JSON.stringify, radius}) & squareArea:(${area})`);
//   console.log(`cirCrf: 2 * 3.14 * ${JSON.stringify, radius} = ${cirCrf}`);
//   console.log(`squCrf: (${sqrtSym}${JSON.stringify, area}) * 4 = ${squCrf}`);
//   const out = circleOrSquare(radius,area);
//   console.log(`finalCheck: cirCrf > squCrf, outPut: ${JSON.stringify(out)} \n`) 
// }
//***


//*** "a10"
// import { firstLast } from "./practice/aVeryEasy/a10";
// console.log(`*a10*\n`);
// const testCasesArr = [
//  "ganesh",
//  "kali",
//  "shiva",
//  "vishnu",
//  "durga"
// ]

// for (let i = 0; i < testCasesArr.length; i++){
//   const testCase = testCasesArr[i];
//   const first = testCase[0];
//   const last = testCase[testCase.length-1];

//   console.log(`testCase: ${JSON.stringify(testCase)}`);
//   console.log(`firstElm:(${JSON.stringify(first)}) & lastElm:(${JSON.stringify(last)})`);
//   const out = firstLast(testCase);
//   console.log(`outPut: ${JSON.stringify(out)} \n`) 
// }
//***


//*** "a11"
// import { firstHeadRestTail } from "./practice/aVeryEasy/a11";
// console.log(`*a11*\n`);
// const testCasesArr = [
//  [1, 2, 3, 4],
//  [5, 6, 7, 8, 9],
//  [11, 22, 33, 44, 55]
// ]

// for (let i = 0; i < testCasesArr.length; i++){
//   const testCase = testCasesArr[i];
//   const [radius, ...rest] = testCase;
//   const head = radius;
//   const tail = rest;

//   console.log(`testCase: ${testCase} \nhead:(${JSON.stringify, radius}), tail:(${tail})`);
//   const out = firstHeadRestTail(testCase);
//   console.log(`outPut: ${JSON.stringify(out)}\n`)
// }
//***


//***"a12"
// import { getMultipliedArr } from "./practice/aVeryEasy/a12";
// console.log(`*a12*\n`);
// const testCasesArr = [
//  [2, 5, 3],
//  [1, 86, -5],
//  [5, 382, 0]
// ]

// for (let i = 0; i < testCasesArr.length; i++){
//   const testCase = testCasesArr[i];

//   console.log(`testCase: ${JSON.stringify(testCase)}`);
//   console.log(`multiplyByTwo:(${JSON.stringify(testCase)}*2)`);
//   const out = getMultipliedArr(testCase);
//   console.log(`outPut: ${JSON.stringify(out)}\n`)
// }
//***


//*** "a13"
import { evenOrOdd } from "./practice/aVeryEasy/a13";
console.log(`*a13*\n`);
const testCasesArr = [
 [1, 2, 3, 4],
 [6, 7, 8],
 [0, 8, 10]
]

for (let i = 0; i < testCasesArr.length; i++){
  const testCase = testCasesArr[i];
  let sumArr = 0;
  for (let j=0; j<testCase.length; j++){
    sumArr = testCase[j] + sumArr
  }
  const out = evenOrOdd(testCase);
  console.log(`testCase: ${testCase} \nsumArray:(SUM${JSON.stringify(testCase)}) = ${sumArr}`);
  console.log(`outPut: ${JSON.stringify(out)}\n`)
}
//***


//*** "a14"
// import { sumMinimums } from "./practice/aVeryEasy/a14";
// console.log(`*a14*\n`);
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
// console.log(`*a15*\n`);
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
// console.log(`*a16*\n`);
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
// console.log(`*a17*\n`);
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