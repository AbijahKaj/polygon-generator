const drawIcon = (size) => {
	const n = size + 1;
	for (let i = 1; i <= n; i++){
		let  countValue = i <= n/2 ? i : n - i;
		countValue = (countValue << (countValue - 1 > 0)) -  (countValue - 1 > 0);
		console.log(`${' '.repeat(Math.abs(n/2 - i))}${'*'.repeat(countValue)}`);
	}
}

drawIcon(11);