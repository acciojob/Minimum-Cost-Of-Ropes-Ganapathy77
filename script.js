function calculateMinCost() {
  //your code here
	let result = document.querySelector("#result");
  let ropeLenghts = document.querySelector("#rope-lengths").value;
	let ropeLengthArray = ropeLenghts.split(",");
	ropeLengthArray.sort(function (a,b) { return a-b;})
	let cost = 0;

	while(ropeLengthArray.length>1){
		let sum= (Number(ropeLengthArray[0]) + Number(ropeLengthArray[1]));
		cost+=sum;
		ropeLengthArray.push(sum);
		ropeLengthArray.shift();
		ropeLengthArray.shift();

		ropeLengthArray.sort(function (a,b) { return a-b; })
		
	}
	result.innerHTML = cost;
	result.classList.add("div");
}  
