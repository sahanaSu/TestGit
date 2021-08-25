var obj = {num:2};

	var add = function(){

		return this.num*2;

	}

	console.log(add.call(obj));
