export function oddOrEven(s: string) {
    
    for(let i= 0; i <= s.length; i++){
        s.length
    }
    if(s.length % 2 === 0){
        return `(sLength: ${JSON.stringify(s.length)}, evenNumber)` + " " + true;
    } else 
    {
        return `(sLength: ${JSON.stringify(s.length)}, oddNumber)` + " " + false
    }
}