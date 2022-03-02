// adding display, calc, and style to buttons when clicked
const buttons = document.querySelectorAll('.button');
buttons.forEach((element) => {
  element.addEventListener('click', () => {
    createDisplayInputs(element);
   })
})

//creating display by storing values in string
const displayBox = document.querySelector('#currenttotal'); // select display box
const smallTotal = document.querySelector('#fullcalc'); // select display box
let inputs = ''; // empty array to store all inputs
let currentNum = ''; // empty string to store most recent num
let total = ''; // empty to store total num;
let operators = ''; // empty string to store operators
let mathSymbol; // used to update operators displayed

//3+12+4
//3+12 total = 3
//3 total = 0

function createDisplayInputs(element) {
  switch (element.id) {
    case 'add' : 
      mathSymbol = '+';
      saveOperators(mathSymbol);
      chooseTotal(operators);
      createSmallDisplay()
    break;
    case 'sub' : 
      mathSymbol = '-';
      saveOperators(mathSymbol);
      chooseTotal(operators);
      createSmallDisplay()
    break;
    case 'divide' : 
      mathSymbol = '÷';
      saveOperators(mathSymbol);
      chooseTotal(operators);
      createSmallDisplay()
    break;
    case 'mult' : 
      mathSymbol = 'x';
      saveOperators(mathSymbol);
      chooseTotal(operators);
      createSmallDisplay()
    break;
    case 'pow' : 
      mathSymbol = '^';
      saveOperators(mathSymbol);
      chooseTotal(operators);
      createSmallDisplay()
    break;
    case 'pos-neg' : 
      switchPosNeg();
    break;
    case 'perc' : 
      perc();
    break;
    case 'dec' : 
      dec();
    break;
    case 'back' :
      currentNum = currentNum.substring(0, currentNum.length - 1);
      displayBox.textContent = currentNum;
    break;
    case 'clear' :
      clear();
      break;
    case 'enter' : 
      mathSymbol = '=';
      saveOperators(mathSymbol);
      calcFinalTotal();
    break;
    default:
      currentNum += element.id; // 11
      displayBox.textContent = currentNum; //display 12 in box
    }
}

//saving operators display
function saveOperators(mathSymbol) {
  inputs += currentNum + mathSymbol; // update inputs array 11 + 12 +
  operators += mathSymbol; // save to operators array +
}

//triggered if operator is hit
function chooseTotal(operators) {
  if (operators.length == 0) {
    total = 0;
    currentNum = '';
    }
  else if (operators.length == 1) {
    total = +currentNum;
    currentNum = '';
    }
  else if (operators.length > 1) {
    calcInitialTotal();
    }
}

function calcInitialTotal() {
    let lastOperator = operators[operators.length-2]; // 2nd to last
    switch (lastOperator) {
    case '+' : 
    add();
    break;
    case '-' : 
    subtract();
    break;
    case '÷' : 
    divide();
    break;
    case 'x' : 
    multiply();
    break;
    case '^' : 
    power();
    break;
    default: '';
    }
}

// all functions
function add() {
    total = +total + +currentNum;
    currentNum = '';
}

function subtract() {
    total = +total - +currentNum;
    currentNum = '';
}

function multiply() {
    total = +total * +currentNum; 
    currentNum = '';
 }

function divide() {
    total = +total / +currentNum; 
    currentNum = '';
}

function power() {
    total = Math.pow(+total , +currentNum);
    currentNum = '';
}


function dec() {
    currentNum += '.'// need to make currentNum reflect decimal points
    displayBox.textContent = currentNum; // updating
}

function perc() {
    currentNum += '%'// need to make currentNum reflect decimal points
    displayBox.textContent = currentNum; // updating
    let convert = currentNum.substring(0, currentNum.length - 1);
    let convertedNum = +convert * 0.01;
    currentNum = convertedNum.toString();
}

function switchPosNeg() {
    if (Math.sign(+currentNum) == -1) {
        currentNum = currentNum.substring(1);
     }
     else {
        currentNum = '-' + currentNum;
     }
     displayBox.textContent = currentNum;
}

function calcFinalTotal() {
  calcInitialTotal(); // calc 1+2+3 = 
  currentNum = total;
  smallTotal.textContent = inputs; // display in small box
  displayBox.textContent = total; // display total in big display
  total = '';
  inputs = '';
  operators = '';
}

function clear() {
  inputs = ''; // empty array to store all inputs
  currentNum = ''; // empty string to store most recent num
  total = ''; // empty to store total num;
  operators = ''; // empty string to store operators
  mathSymbol; // used to update operators displayed
  displayBox.textContent = '';
  smallTotal.textContent = ''; // display in small box
}

//creating small display
function createSmallDisplay() {
    smallTotal.textContent = inputs; // 11 + 12 + 
    displayBox.textContent = ''; // 0 out main box
 } 
