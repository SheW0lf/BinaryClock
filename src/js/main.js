const clock = () => {
		let d = new Date();
		let hours = d.getHours();
		let min = d.getMinutes();
		let sec = d.getSeconds();

		const numSplit = (num) =>{
			let ones = num % 10;
			let tens = (num - ones) / 10;
			return [tens, ones];
		}

		let time = {
			h0: numSplit(hours)[0],
			h1: numSplit(hours)[1],
			m0: numSplit(min)[0],
			m1: numSplit(min)[1],
			s0: numSplit(sec)[0],
			s1: numSplit(sec)[1]
		};

		for(var num in time){
			bitNum = 8;
			for(var i = 0; i < 4; i++){
				var item = document.getElementById(`${num}_${bitNum}`);
				if (time[num] & bitNum){
					item.classList.add("blue");
				}else{
					item.classList.remove("blue");
					}
					bitNum = bitNum >> 1;
				}
			}

		setTimeout(clock, 1000);
};

clock();