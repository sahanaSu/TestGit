1.var obj = {num:2};

	var add = function(){

		return this.num*2;

	}

	console.log(add.call(obj));

2.var obj = {num:2};

	var add = function(a,b,c){

		return this.num+a+b+c;

	}

	var arr=[1,2,3];

	console.log(add.apply(obj,arr));

3.var obj = {num:2};

	var add = function(a,b,c){

		return this.num+a+b+c;

	}



	var bound = add.bind(obj);

	console.log(bound(1,2,3));

4.var student = {age:20};

	var add = function(){

		return this.age;

	}



	var bound = add.bind(this);

	console.log(bound());
