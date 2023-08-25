export function reverse(arr: number[]): number[]{
    let reversed = [];
    for( let i = arr.length - 1; i >= 0; i--){
        const elt = arr[i];
        reversed.push(elt);
    }
    return reversed;
}