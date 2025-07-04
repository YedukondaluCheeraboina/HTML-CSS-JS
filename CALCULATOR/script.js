// script.js
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let input = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      try {
        input = eval(input);  // You can replace eval with a safer parser for production
      } catch {
        input = 'Error';
      }
    } else if (value === 'C') {
      input = '';
    } else {
      input += value;
    }

    display.value = input;
  });
});
