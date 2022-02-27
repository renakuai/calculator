const add = function(a, b) {
  let total = a + b;
  return total;
}

const subtract = function(a, b) {
  let total = a - b;
  return total;
}

const multiply = function(a, b) {
    let total = a * b;
    return total;
  }

const divide = function(a, b) {
    let total = (a / b);
    return total;
  }

function operate (operator, first, second) {
  if (operator == 'add') {
    return add(first, second);
    }
  else if (operator == 'subtract') {
    return subtract(first, second);
    }
  else if (operator == 'multiply') {
    return multiply(first, second);
    }
  else if (operator == 'divide') {
    return divide(first, second);
  }
}

let displayValues = []; // empty array to store clickValue
const display = document.querySelector('#display'); // select display box


// adding click events to all buttons
const buttons = document.querySelectorAll('.button');
buttons.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.add('clicked');
    })
});

// adding display events to numbers
const numbers = document.querySelectorAll('.number');
numbers.forEach((element) => {
  element.addEventListener('click', () => {
    displayValues.push(element.id);
    indisplay();
 })
});

// adding display events to back button
const back = document.querySelector('#back');
back.addEventListener('click', () => {
    displayValues.pop();
    indisplay();
})

function indisplay() {
    let string = displayValues.toString();
    let stringNoCommas = string.replaceAll(',', '');
    let stringNoSpaces = stringNoCommas.replaceAll(' ', '');
    display.textContent = stringNoSpaces;
}

// displaying values in display
function displayVal(element) {
    //if number clicked do this
    if (element.id == ('1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' || '0')) {
        displayValues.push(element.id);
      }
      //if enter clicked
    else if (element.id == 'enter') {
      clickValue.push(element.id); //create full array of ids clicked
        operate();
      }
      //if back clicked
    else if (element.id === 'back') {
         displayValues.pop(); //drop last item of array
      }
      //if operators clicked do this
    else if (element.id == 'operators') {
      clickValue.pop(); //drop last item of array
      displayNum();
    }
}