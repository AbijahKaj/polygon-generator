const drawIcon = (size) => {
	const n = size + 1;
	for (let i = 1; i <= size; i++){
		let  countValue = i <= n/2 ? i : n - i;
		countValue = (countValue << (countValue > 1)) -  (countValue > 1);
		console.log(`${' '.repeat(Math.abs(n/2 - i))}${'*'.repeat(countValue)}`);
	}
}

drawIcon(11);