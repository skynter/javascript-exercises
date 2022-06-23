const add = function(a,b) {

  let sum = a + b;

  return sum;
};

add(2,6);

const subtract = function(a,b) {

  let sub = a - b; 

  return sub;
	
};
subtract(10,4);


const sum = function([a = 0, b = 0, c = 0, d = 0, e = 0]) {

 let mySum = Number(a) + Number(b) + Number(c) + Number(d) + Number(e);

  return mySum;

};

console.log(sum(["1","3","5","7","9"]));



const multiply = function([num1 = 1,num2 = 1,num3 = 1,num4 = 1,num5 = 1,num6 = 1,num7 = 1]) {

  const mult = Number(num1) * Number(num2) * Number(num3) * Number(num4) * Number(num5) * Number(num6) * Number(num7);
  
  return mult;
  
  };
  
console.log(multiply([2,4]));
  

const power = function(a,b) {

  const myPower = Number(a) ** Number(b);
  
  return myPower;
	
};

console.log(power(4,3));

const factorial = function(a) {

  let myFactorial;
  let myFactorial2;

  if ( a == 0 ) {
      myFactorial2 = 1;
      return myFactorial2;
  }

  else if ( a == 1) {
      myFactorial2 = 1;
      return myFactorial2;
  }

  else {
      for (let i = 1; i < a; i++) {

  if (i == 1) {
      myFactorial = a * (a-i);
      myFactorial2 = myFactorial;
      
  }

  else {
      myFactorial2 = myFactorial2 * (a-i);
  }
  
};

};
return myFactorial2;
};

factorial(10);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
