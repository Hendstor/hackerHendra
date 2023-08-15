export function deStructureArr(arr: any[]){
    let newArr = [];
    // console.log(`arr: ${arr}`)
    for(let i = 0; i < arr.length; i++){
        const itg = arr[i];
        const newHead = arr[arr.length-1];
        const newTail = arr[0];
        // twisted.push()  
        newArr.push(arr.shift(), newHead);
        console.log(`newHead: ${newHead}, newTail: ${newTail}, newArr: ${newArr}`)
    }
    return newArr;


}