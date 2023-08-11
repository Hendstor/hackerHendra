const inPutString = '"This is the output of TypeScript Project"';

export function renderedOut (what: string = inPutString): string {
  return `outPrinted as : ${what}! `;
}

console.log(renderedOut())