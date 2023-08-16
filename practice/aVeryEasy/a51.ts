export function multyHeadNTail(arr: any[]){
    let arrTarget = [];
    for (let i = 0; i < arr.length; i++){ 
        arrTarget = (arr[i]);
        console.log(`arrTarget: ${arrTarget}`);
    // }
        for (let i = 0; i < arrTarget.length; i++){
        const newHead = arrTarget[arrTarget.length - 1];
        const newTail = arrTarget[0];
        // newHead = (newHead[i]);
        arrTarget[0] = newHead;
        arrTarget[(arrTarget.length) - 1] = newTail;
        console.log(`newHead: ${newHead}   newTail: ${newTail}`);
        return (arrTarget);
        }
    }
}