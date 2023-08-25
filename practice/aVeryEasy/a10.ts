export function firstLast(name: string): string {
    // TODO: remove targetArr assignment
    // TODO: either decompose a and z (like in a), or access them based on indices (like in z)
    // TODO: make sure your return is precisely as in the question
	let targetArr = name;
    const [a, ...rest] = targetArr;
    const z = targetArr[targetArr.length-1];
    return `${(a)}${(z)}`
}