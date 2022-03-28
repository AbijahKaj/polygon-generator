const drawIcon = (size) => {
	const n = size + 1;
	for (let i = 1; i <= n; i++){
		let  countValue = i <= n/2 ? i : n - i;
		countValue = countValue * (2 ** (countValue - 1 <= 0 ? 0 : 1)) -  (countValue - 1 <= 0 ? 0 : 1);
		console.log(`${' '.repeat(i <= n/2 ? n/2 - i : i - n/2)}${'*'.repeat(countValue)}`);
	}
}

drawIcon(11);