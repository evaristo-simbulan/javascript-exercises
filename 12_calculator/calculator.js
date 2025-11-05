const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(input) {
  return input.reduce((sum, value) => sum += value, 0);
};

const multiply = function(input) {
  return input.reduce((sum, value) => sum *= value);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(input) {
  let result = 1;
  for(let i = input; i > 1; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
