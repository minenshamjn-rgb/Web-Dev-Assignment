function checkEvenOdd() {
  const number = 7;
  let result;

  if (number % 2 === 0) {
    result = `${number} is an even number.`;
  } else {
    result = `${number} is an odd number.`;
  }

  document.getElementById('even-odd-output').textContent = result;
}

function showTable() {
  const number = 5;
  let output = '';

  for (let i = 1; i <= 10; i++) {
    output += `${number} x ${i} = ${number * i}\n`;
  }

  document.getElementById('table-output').textContent = output;
}

function showFizzBuzz() {
  let output = '';

  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output += 'FizzBuzz\n';
    } else if (i % 3 === 0) {
      output += 'Fizz\n';
    } else if (i % 5 === 0) {
      output += 'Buzz\n';
    } else {
      output += `${i}\n`;
    }
  }

  document.getElementById('fizzbuzz-output').textContent = output;
}

function showSquarePattern() {
  const n = 5;
  let output = '';

  for (let i = 0; i < n; i++) {
    output += '*'.repeat(n) + '\n';
  }

  document.getElementById('square-output').textContent = output;
}

function showTrianglePattern() {
  const n = 5;
  let output = '';

  for (let i = 1; i <= n; i++) {
    output += '*'.repeat(i) + '\n';
  }

  document.getElementById('triangle-output').textContent = output;
}
