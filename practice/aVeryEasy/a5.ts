export function deStructureArr(arr: any[]){
        const newHead = arr[arr.length - 1];
        const newTail = arr[0];
        arr[0] = newHead;
        arr[arr.length - 1] = newTail;
        return (arr)
}