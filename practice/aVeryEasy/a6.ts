export function inchesToFeet(inches: number){
    let num = inches;
    if(inches < 12){
        return 0
    } else {
        return inches / 12
    }
}