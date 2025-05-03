/*-------------------------------- Constants --------------------------------*/
const calculator = document.querySelector('#calculator');
const displyElement = document.querySelector('.display')
// /*-------------------------------- Variables --------------------------------*/
let firstIntiger = '';
let secondIntiger = '';
let operator = '';
//setting the disply digits.
/*------------------------ Cached Element References ------------------------*/
// didnt use it as far as my understandidng.
/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
  console.log(event.target.innerText);
// creating the event listener.

  if (event.target.classList.contains('number')) {
    if (operator === '') {
      firstIntiger = firstIntiger + event.target.innerText;
      displyElement.innerText = firstIntiger;
    }
    else {
      secondIntiger = secondIntiger + event.target.innerText;
      displyElement.innerText = secondIntiger;
    }
  }
  else if (event.target.classList.contains('operator')) {
    if (event.target.innerText === 'C') {
      firstIntiger = '';
      secondIntiger = '';
      operator = '';
      displyElement.innerText = '';
    }  //to clear the disply
    else {operator = (event.target.innerText)
    displyElement.innerText = event.target.innerText;}
    
  }
  else if (event.target.classList.contains('equals')) {
    if (operator === '+') {
      displyElement.innerText = Number(firstIntiger) + Number(secondIntiger);//asked a friend about this alteration as it was just displaying the numbers not the result.
    }
    else if (operator === '-') {
      displyElement.innerText = firstIntiger - secondIntiger;
    }

    else if (operator === '*') {
      displyElement.innerText = firstIntiger * secondIntiger;
    }

    else if (operator === '/') {
      displyElement.innerText = firstIntiger / secondIntiger;
    }
  }
});

/*-------------------------------- Functions --------------------------------*/
// N/A