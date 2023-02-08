calc.addEventListener('click', () => {
  const numA = Number(document.querySelector('#numberA').value);
  const numB = Number(document.querySelector('#numberB').value);
  if (numA <= 0 || numB <= 0) {
    alert("Valores inválidos. Tente novamente!");
    return;
  }
  sumAB(numA, numB);
  subtractionA(numA, numB);
  subtractionB(numA, numB);
  multiplication(numA, numB);
  divisionA(numA, numB);
  divisionB(numA, numB);
  potentiationA(numA, numB);
  potentiationB(numA, numB);
  squareA(numA);
  squareB(numB);
  factorialA(numA);
  factorialB(numB);
  percentageA(numA, numB);
  percentageB(numA, numB);
  meanAB(numA, numB);
})

function sumAB(numA, numB) {
  document.querySelector('#sumAB').textContent = numA + numB;
}

function subtractionA(numA, numB) {
  document.querySelector('#subtractionA').textContent = numA - numB;
}

function subtractionB(numA, numB) {
  document.querySelector('#subtractionB').textContent = numB - numA;
}

function multiplication(numA, numB) {
  document.querySelector('#multiplication').textContent = numA * numB;
}

function divisionA(numA, numB) {
  document.querySelector('#divisionA').textContent = (numA / numB).toFixed(2);
}

function divisionB(numA, numB) {
  document.querySelector('#divisionB').textContent = (numB / numA).toFixed(2);
}


function potentiationA(numA, numB) {
  document.querySelector('#potentiationA').textContent = numA ** numB;
}

function potentiationB(numA, numB) {
  document.querySelector('#potentiationB').textContent = numB ** numA;
}


function squareA(numA) {
  document.querySelector('#squareA').textContent = Math.sqrt(numA).toFixed(2);
}

function squareB(numB) {
  document.querySelector('#squareB').textContent = Math.sqrt(numB).toFixed(2);
}


function factorialA(numA) {
  let result = 1;
  for (let i = 1; i <= numA; i++) {
    result *= i
  }
  document.querySelector('#factorialA').textContent = result;
}

function factorialB(numB) {
  let result = 1;
  for (let i = 1; i <= numB; i++) {
    result *= i
  }
  document.querySelector('#factorialB').textContent = result;
}

function percentageA(numA, numB) {
  document.querySelector('#percentageA').textContent = (numB / numA * 100).toFixed(0) + "%";
} + "%";


function percentageB(numA, numB) {
  document.querySelector('#percentageB').textContent = (numA / numB * 100).toFixed(0) + "%";
}

function meanAB(numA, numB) {
  document.querySelector('#meanAB').textContent = (numA + numB) / 2
}
