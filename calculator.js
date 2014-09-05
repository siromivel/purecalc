//Global variables
var results = document.getElementById("display");
var inputs = ["","",""];
var values = [];

// Arithmetic functions
var add = function(a, b) {return a + b;}
var subtract = function(a, b) {return a - b;}
var multiply = function(a, b) {return a * b;}
var divide = function(a, b) {return a / b;}
var equals = function() {
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

// Functions for storing and displaying user input
var update = function(value) {
	inputs.push(value);
	inputs.shift();
}
var clear = function() {
	inputs = ["","",""];
	values = [];
	display();
}
var del = function() {
  if(values.length > 0) {
    values.pop();
  }
  else {
    for(var i = 2; i >= 0; i--) {
      var x = inputs[i]
      if(inputs[i]) { 
        var y = x.slice(0,-1); 
        inputs[i] = y;
      }
    }
  } 
}
var display = function() {
	results.innerHTML = inputs.join(" ") + " " + values.join("");
}

// Event listeners for mouse input
for (var i = 0; i < 11; i++) {
	document.getElementById(i).addEventListener("click", function() {
		values.push(this.innerHTML);
		display();
	});
}
for (var i = 11; i < 15; i++) {
	document.getElementById(i).addEventListener("click", function() {
		update(values.join(""));
		update(this.innerHTML);
		values = [];
		display();
	});
}
document.getElementById(15).addEventListener("click", function(){
	update(values.join(""));
	values = [];
	equals();
});
document.getElementById(16).addEventListener("click", function(){ clear(); });
document.getElementById(17).addEventListener("click", function(){ 
  del();
	display();
});

//Keyboard support
document.addEventListener('keydown', function(event) {
  if((event.keyCode > 47) && (event.keyCode < 58))  { values.push(event.keyCode - 48);
  } else if((event.keyCode > 95) && (event.keyCode < 106)) { values.push(event.keyCode - 96); 
  } else if(event.keyCode === 106) {
      update(values.join(""));
      update("*");
      values = [];
  } else if(event.keyCode === 107) {
      update(values.join(""));
      update("+");
      values = [];
  } else if(event.keyCode === 109) {
      update(values.join(""));
      update("-");
      values = [];
  } else if(event.keyCode === 110) { values.push(".");
  } else if(event.keyCode === 111) {
      update(values.join(""));
      update("/");
      values = [];
  } else if(event.keyCode === 12 || 13) {
    	update(values.join(""));
      values = [];
      equals();
  }
  display();
});