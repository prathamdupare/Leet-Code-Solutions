const multiply = (a, b) => {
  let sum = 0;

  for (let i = 0; i < b; i++) {
    sum += a;
  }

  return sum;
};

const factorial = (n) => {
  let factorialValue = 1;

  for (let i = n; i > 0; i--) {
    factorialValue = multiply(factorialValue, i);
  }
  console.log(factorialValue);
};

factorial(4);
