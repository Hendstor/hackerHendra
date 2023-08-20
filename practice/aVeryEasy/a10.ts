export function firstLast(input: string) {
    // TODO: remove targetArr assignment
    // TODO: either decompose a and z (like in a), or access them based on indices (like in z)
    // TODO: make sure your return is precisely as in the question
	let targetArr = input;
    const [a, ...rest] = targetArr;
    const z = targetArr[targetArr.length-1];
    return `(${a},${z})`
}