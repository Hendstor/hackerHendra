export function oddOrEven(s: string) {
    // WTF is this loop    
    for(let i= 0; i <= s.length; i++){
        s.length
    }
    // return true if even, false if odd. 
    // TODO: specify return type for your function
    // return booleans not strings
    if (s.length % 2 === 0){
        return `(sLength: ${JSON.stringify(s.length)}, evenNumber)` + " " + true;
    }
    else {
        return `(sLength: ${JSON.stringify(s.length)}, oddNumber)` + " " + false
    }
}