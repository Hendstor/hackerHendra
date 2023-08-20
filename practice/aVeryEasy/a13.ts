export function evenOrOdd(arr: number[]): string {
	let sumArr = 0;
    for( let i = 0; i < arr.length-0; i++){
        sumArr = arr[i] + sumArr;
    }
    // TODO: make sure you understand this
    if(sumArr % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}