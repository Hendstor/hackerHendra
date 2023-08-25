export function firstHeadRestTail(arr: any) {
    // Change the string so that it will evaluate to head = 1 and tail = [2, 3, 4] 
    // Use the Rest element
    // TODO: remove unused variables
    
    const [head, ...tail] = arr;
    arr = [head, tail];
    return arr;
}