function add(){
  var b = document.getElementById("b").value;
  var a = document.getElementById("a").value;
  b = parseInt(b);
  a = parseInt(a);
  var out = a+b;
document.getElementById("demo").innerHTML = "Out: "+out;
}

function sub(){
  var b = document.getElementById("b").value;
  var a = document.getElementById("a").value;
  b = parseInt(b);
  a = parseInt(a);
  var out = a-b;
document.getElementById("demo").innerHTML = "Out: "+out;
}

function time(){
  var b = document.getElementById("b").value;
  var a = document.getElementById("a").value;
  b = parseInt(b);
  a = parseInt(a);
  var out = a*b;
document.getElementById("demo").innerHTML = "Out: "+out;
}

function div(){
  var b = document.getElementById("b").value;
  var a = document.getElementById("a").value;
  b = parseInt(b);
  a = parseInt(a);
  var out = a/b;
document.getElementById("demo").innerHTML = "Out: "+out;
}
