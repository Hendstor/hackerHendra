export function firstLast(input: string) {
	let targetArr = input;
    const [a, ...rest] = targetArr;
    const z = targetArr[targetArr.length-1];
    return `(${a},${z})`
}