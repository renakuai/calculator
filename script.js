// adding display, calc, and style to buttons when clicked
const buttons = document.querySelectorAll('.button');
buttons.forEach((element) => {
  element.addEventListener('click', () => {
    performCalc(element);
   })
})

// creating display by storing values in string
const currentTotal = document.querySelector('#currenttotal'); // select display box
let displayValues = ''; // empty array to store typed numbers
let currentNum = ''; // empty string to store most recent num
let total = ''; // empty string to store total;
let operators = []; //empty array to remember operators
let mathSymbol; // used to update display

//performing relevant calc based on clicked button
function performCalc(element) {
    switch (element.id) {
        case ('add') :
            add();
            mathSymbol = '+';
            updateDisplayNums(element, mathSymbol);
            break;
        case ('sub') :
            subtract();
            mathSymbol = '-';
            updateDisplayNums(element, mathSymbol);
            break;
        case ('mult') :
            multiply();
            mathSymbol = 'x';
            updateDisplayNums(element, mathSymbol);
            break;
        case ('divide') :
            divide();
            mathSymbol = '÷';
            updateDisplayNums(element, mathSymbol);
            break;
        case ('pow') :
            power();
            mathSymbol = '^';
            updateDisplayNums(element, mathSymbol);
            break;
        case ('enter') :
            calcTotal();
            break;
        case ('pos-neg') :
            posOrNeg();
            break;
        case ('back') :
            back();
            break;
        case ('dec') :
            dec();
            break;
        case ('perc') :
            perc();
            break;
        case ('clear') :
            displayValues = ''; // empty array to store display
            currentTotal.textContent = '';
            currentNum = ''; // empty string to store most recent num
            total = ''; // empty string to store total;
            operators = [];
            fullCalc.textContent = '';
            break;
        default :
            currentNum += element.id;
            displayValues += element.id;
            currentTotal.textContent = currentNum;
        }
}

//updating display
function updateDisplayNums(element, mathSymbol) {
    currentNum = '';
    displayValues += mathSymbol;
    fullCalc.textContent = displayValues; //top screen
    currentTotal.textContent = ''; // empty text box
    operators.push(element.id);
}

 //perform final total calc and display total 
const fullCalc = document.querySelector('#fullcalc');
let fullNumbers = '';

function calcTotal() {
  finalOperator = operators[operators.length-1];
  switch (finalOperator) {
    case 'add' : 
     add();
    break;
    case 'sub' : 
     subtract();
    break;
    case 'divide' : 
     divide();
    break;
    case 'mult' : 
     multiply();
    break;
    case 'pow' : 
     power();
    break;
    default: '';
    }
    storeEquation();
    updateResetTotals();
 }

 //storing equation in top part of display
 function storeEquation() {
    currentNum = '';
    displayValues += '=';
    fullCalc.textContent = displayValues; //top screen
    currentTotal.textContent = ''; // empty text box
 }

 //updating final total and then resetting
 function updateResetTotals() {
    currentTotal.textContent = total;
    currentNum = total.toString();
    displayValues = total.toString();
    total = '';
 }

// all functions
function add() {
    total = +total + +currentNum;
}

function subtract() {
    total = +total - +currentNum;
}

function multiply() {
  if (total == '') {
    total = +currentNum;
  }
  else {
    total = +total * +currentNum; 
    }
 }

function divide() {
  if (total == '') {
    total = +currentNum;
  }
  else {
    total = +total / +currentNum; 
  }
}

function power() {
    if (total == '') {
      total = +currentNum;
    }
    else {
      total = Math.pow(+total , +currentNum); 
    }
}

function posOrNeg() {
    if (Math.sign(+currentNum) === -1) {
        displayValues = displayValues.substring(1);
     }
     else {
        displayValues = '-' + currentNum;
     }
     currentTotal.textContent = displayValues;
     let changedNum = -1 * +currentNum;
     currentNum = changedNum.toString();
}

function back() {
    displayValues = displayValues.substring(0, displayValues.length - 1);
    currentTotal.textContent = displayValues;
    currentNum = currentNum.substring(0, currentNum.length - 1);
}

function dec() {
    displayValues += '.' // adding . to display
    currentNum += '.'// need to make currentNum reflect decimal points
    currentTotal.textContent = currentNum; // updating
}

function perc() {
    displayValues += '%' // adding . to display
    currentNum += '%'// need to make currentNum reflect decimal points
    currentTotal.textContent = currentNum; // updating
    let toDec = +currentNum.substring(0, currentNum.length - 1) * 0.01;
    currentNum = toDec.toString();

}