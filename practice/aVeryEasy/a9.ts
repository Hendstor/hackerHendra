export function circleOrSquare(rad: number, area: number){
    const targetArr = [rad, area];
    const [a, b] = targetArr;
    const cirA = 2 * 3.14 * a;
    const cirB = (Math.sqrt(b)) * 4;
    if(cirA > cirB){
        return true;
    } else {
        return false
    }
}