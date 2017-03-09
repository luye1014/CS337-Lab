function reepaint(element, indent){
  var 5 = "->".times(indent) element.tagName;
  if(element.tagName = "p"){
    s = "contents: "element.innerHTML;
  }
  console.log(s);
  var children = element.childElements();
  for(var j = 0; j < children.length ; ++j){
    treeprint(children[j], 1+indent);
  }
}

function action(){
  var h = ss("html");
  console.assert(h.length == 1);
  treeprint(h[0], 0);
}
