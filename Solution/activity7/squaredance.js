"use strict";

function treeprint(element, indent) {
	var s = "->".times(indent) + element.tagName;
	if (element.tagName === "P") {
		s = "contents: " + element.innerHTML;
	}
	console.log(s);
	var children = element.childElements();
	for (var j = 0; j < children.length; ++j) {
		treeprint(children[j], 1+indent);
	}
}

function action() {
	var h = $$("html");
	console.assert(h.length === 1);
	treeprint(h[0], 0);
}

window.onload = function() {
	document.getElementById("action").onclick = action;
}
