"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderedOut = void 0;
const inPutString = '"This is the output of TypeScript Project"';
function renderedOut(what = inPutString) {
    return `outPrinted as : ${what}! `;
}
exports.renderedOut = renderedOut;
console.log(renderedOut());
