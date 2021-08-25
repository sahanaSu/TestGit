let multiply = function(a){
	let y = function(b){
  	console.log(a*b);
  }
  return y;
}

let multiplyByTwo = multiply(2);
multiplyByTwo(3);

let multiplyByThree = multiply(3);
multiplyByThree(3);
