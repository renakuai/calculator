let currentNum = '';
let total = ''; //'13'
let operators = [];
let displayValues = []; // empty array to store display
const display = document.querySelector('#display'); // select display box
let i = 0; //initializing time


// adding hover / stylistic elements to all buttons
const buttons = document.querySelectorAll('.button');
buttons.forEach((element) => {
  element.addEventListener('click', () => {
    createDisplay(element);
    storeNumbers(element);
   })
  })

//if operator is clicked, store the 
function storeNumbers(element) {
    if (total == '') {
        if (element.id === 'add') {
            total = +total + +currentNum //num total update
            currentNum =''; //empty out current num
            operators.push(element.id);
        }
        else if (element.id ===  '1' || '2' || '3' ||  '4' || '5' || '6' || '7' || '8' || '9' || '0') {
            currentNum += element.id; //str concat 13
        }
    }
    else {
        if (element.id === 'add') {
            total = +total + +currentNum //update total into num
            currentNum =''; //empty out current num
            operators.push(element.id);
        }
        else if (element.id === 'enter') {
            let finalOperator = operators[operators.length-1]; //
            if (finalOperator === 'add') {
                total = +total + +currentNum //update total into num
                display.textContent = total;
            }
        }
        else if (element.id ===  '1' || '2' || '3' ||  '4' || '5' || '6' || '7' || '8' || '9' || '0') {
            currentNum += element.id; //concat string to make total
        }
    }
 }
     // total = 1;
      //total = +total * +secondNum;

 
//storing clicked items to display array
function createDisplay(element) {
    if (element.id === 'add'){
    displayValues.push('+');
    indisplay();
    }
    else if (element.id === 'sub'){
    displayValues.push('-');
    indisplay();
    }
    else if (element.id === 'mult'){
    displayValues.push('x');
    indisplay();
    }
    else if (element.id === 'divide'){
    displayValues.push('÷');
    indisplay();
    }
    else if (element.id === 'pow'){
    displayValues.push('^');
    indisplay();
    }
    else if (element.id === 'clear'){
    displayValues = [];
    currentNum = ''; //empty out current num
    total = '';
    operators = [];
    indisplay();
    }
    else if (element.id === 'back'){
    displayValues.pop();
    indisplay();
    }
    else if (element.id ===  '1' || '2' || '3' ||  '4' || '5' || '6' || '7' || '8' || '9' || '0') {
    displayValues.push(element.id);
    indisplay();
    }
    else if (element.id == 'enter'){
     display.textContent = total;
    }
}


//array -> string, clean up, and show in display
function indisplay() {
    let string = displayValues.toString();
    let stringNoCommas = string.replaceAll(',', '');
    let stringNoSpaces = stringNoCommas.replaceAll(' ', '');
    display.textContent = stringNoSpaces;
}
 //save numbers until operator hit
 //save second set numbers until operator hit
 //calculate first and second
 //then total becomes first

 //if no total
 //click number and operator, create total
 //else
 //take the total and do what you did to create total
 //total + currentNum