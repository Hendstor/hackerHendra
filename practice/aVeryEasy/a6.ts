export function inchesToFeet(inches: number): number {
    if(inches < 12){
        return 0
    } else {
        // TODO: make sure you round down the feet. Return only integers
        return Math.floor((inches / 12))
    }
}