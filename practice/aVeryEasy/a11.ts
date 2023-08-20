export function oneHeadMoreTail(str: any) {
    // Change the string so that it will evaluate to head = 1 and tail = [2, 3, 4] 
    // Use the Rest element
    // TODO: remove unused variables
    const [a, ...rest] = str;
    const head = a;
    const tail = rest;
    return rest;
    // console.log(`moreTails: ${rest}`)
}