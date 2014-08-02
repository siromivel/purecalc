var results = document.getElementById("display");
var inputs = ["","",""];
var values = [];

function add(a, b) {
	return a + b;
}
function subtract(a, b) {
	return a - b;
}
function multiply(a, b) {
	return a * b;
}
function divide(a, b) {
	return a / b;
}
function equals() {
	if (inputs[1] === "+") {
		var sum = add(parseFloat(inputs[0]), parseFloat(inputs[2]));
		clear();	
		values.push(sum);
	}
	else if (inputs[1] === "-") {
		var difference = subtract(parseFloat(inputs[0]), parseFloat(inputs[2]));
		clear();	
		values.push(difference)
	}
	else if (inputs[1] === "*") {
		var product = multiply(parseFloat(inputs[0]), parseFloat(inputs[2]));
		clear();	
		values.push(product);	
	}
	else if (inputs[1] === "/") {
		var quotient = divide(parseFloat(inputs[0]), parseFloat(inputs[2]));
		clear();
		values.push(quotient);
	}
	display();
}
function pusher(value) {
	inputs.push(value);
	inputs.shift();
}
function clear() {
	inputs = ["","",""];
	values = [];
	display();
}
function display() {
	results.innerHTML = inputs.join(" ") + " " + values.join("");
}

for (var i = 0; i < 11; i++) {
	document.getElementById(i).addEventListener("click", function() {
		values.push(this.innerHTML);
		display();
	});
}
for (var i = 11; i < 15; i++) {
	document.getElementById(i).addEventListener("click", function() {
		pusher(values.join(""));
		pusher(this.innerHTML);
		values = [];
		display();
	});
}
document.getElementById(15).addEventListener("click", function(){
	pusher(values.join(""));
	values = [];
	equals();
});
document.getElementById(16).addEventListener("click", function(){ clear(); });
document.getElementById(17).addEventListener("click", function(){ 
	values.pop();
	display();
});