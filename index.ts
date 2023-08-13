import { add } from "./practice/a_veryEasy/a1";

const inPutString = '"This is the output of TypeScript Project"';

export function renderedOut (what: string = inPutString): string {
  return `outPrinted as : ${what}! `;
}

// console.log(renderedOut())

// comment

// import

const out = add(1, 1)
console.log(out)

// const testCases = [
//   [1, 2],
//   [2, 3],
//   [10, 20]
// ]

// for (let i = 0; i < testCases.length; i++) {
//   const out = add(testCases[i][0], testCases[i][1])
//   console.log(`testCase: ${JSON.stringify(testCases[i])}, out: ${out}`)
// }
// aVeryEasy
// a_very_easy