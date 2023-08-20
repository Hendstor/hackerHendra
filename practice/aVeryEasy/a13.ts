export function evenOrOdd(arr: number[]) {
	let sumArr = 0;
    for( let i = 0; i < arr.length-0; i++){
        sumArr = arr[i] + sumArr;
    }
    if(sumArr % 2){
        return [sumArr, "odd"];
    } else {
        return [sumArr, "even"]
    }
}