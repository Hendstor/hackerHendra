export function circleOrSquare(rad: number, area: number){
    // TODO: make sure your variable names are meaningful, rad -> circleRadius, cirA?, cirB?
    // TODO: use Math package for the value of Pi
    // rad is a, wtf is this?
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