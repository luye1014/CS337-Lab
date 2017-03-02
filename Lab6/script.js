function getAdd(){
	var a = document.getElementById("getA").value;
	var b = document.getElementById("getB").value;
	a = parseInt(a);
	b = parseInt(b);
	var result = document.getElementById("result");
	result.innerHTML = "sum: " + (a+b);
}

function getDiff(){
	var a = document.getElementById("getA").value;
	var b = document.getElementById("getB").value;
	a = parseInt(a);
	b = parseInt(b);
	var result = document.getElementById("result");
	result.innerHTML = "sum: " + (a-b);
}

function getMult(){
	var a = document.getElementById("getA").value;
	var b = document.getElementById("getB").value;
	a = parseInt(a);
	b = parseInt(b);
	var result = document.getElementById("result");
	result.innerHTML = "sum: " + (a*b);
}

function getRatio(){
	var a = document.getElementById("getA").value;
	var b = document.getElementById("getB").value;
	a = parseInt(a);
	b = parseInt(b);
	var result = document.getElementById("result");
	result.innerHTML = "sum: " + (a/b);
}
