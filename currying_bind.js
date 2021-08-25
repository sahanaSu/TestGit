let multiply = function(x,y){
	return x*y;
}

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(3));

let multiplyByTwo1 = multiply.bind(this, 2 ,5);
console.log(multiplyByTwo1(3));

let multiplyByTwo2 = multiply.bind(this,);
console.log(multiplyByTwo2(3,5));

let multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(3));

