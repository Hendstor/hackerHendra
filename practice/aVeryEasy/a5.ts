export function deStructureArr(arr: any[]){
        console.log(`origin: ${JSON.stringify, arr}   length: ${arr.length}`)
        const newHead = arr[arr.length - 1];
        const newTail = arr[0];
        arr[0] = newHead;
        arr[(arr.length) - 1] = newTail;
        console.log(`newHead: ${newHead}   newTail: ${newTail}`);
        return (arr)
        
}