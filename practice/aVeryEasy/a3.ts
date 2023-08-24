export function reverse(arr: number[]): number[]{
    let reversed = [];
    // console.log(`reverse arr: ${arr}`)
    for(let i = arr.length - 1; i >= 0; i--){
        const elt = arr[i];
        reversed.push(elt);
        console.log(`i: ${i}, elt: ${elt}, reversed: ${reversed}`)
    }
    return reversed;
}