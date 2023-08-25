export function circleOrSquare(radius: number, area: number): boolean{
    // TODO: make sure your variable names are meaningful, rad -> circleRadius, cirCrf?, squCrf?
    // TODO: use Math package for the value of Pi
    // rad is radius, wtf is this?
    const arr = [radius, area];
    const cirCrf = 2 * Math.PI * radius; 
    const squCrf = (Math.sqrt(area)) * 4;
    if(cirCrf > squCrf){
        return true;
    } else {
        return false
    }
}