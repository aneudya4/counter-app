// global variables

const btns = document.querySelectorAll('.btn');
const counterSpan = document.querySelector('#counter');
const inputIncrement = document.querySelector('input#auto-increase');
const inputDecrement = document.querySelector('input#auto-decrease');
let counter = 0;

// event listener functions handelers

// event Listeners on click

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.target.classList.contains('increase')) {
      increaseValue();
    } else if (e.target.classList.contains('decrease')) {
      decreaseValue();
    } else {
      resetCounter();
    }
  });
});

// increase the variable counter

const increaseValue = () => {
  counter += 1;
  counterSpan.innerHTML = counter.toString();
};
// decrease the variable counter
const decreaseValue = () => {
  counter -= 1;
  if (counter < 0) {
    counter = 0;
    counterSpan.innerHTML = counter.toString();
  } else {
    counterSpan.innerHTML = counter.toString();
  }
};

// resets counter to  0
const resetCounter = () => {
  inputIncrement.checked = false;
  inputDecrement.checked = false;
  counter = 0;
  counterSpan.innerHTML = counter.toString();
};

// auto increase eventListener
inputIncrement.addEventListener('change', (e) => {
  let interval = setInterval(() => {
    if (e.target.checked) {
      increaseValue();
    } else {
      clearInterval(interval);
    }
  }, 1000);
});

// auto decrease  eventListener

inputDecrement.addEventListener('change', (e) => {
  let interval = setInterval(() => {
    if (e.target.checked) {
      decreaseValue();
      if (counter === 0) {
        inputDecrement.checked = false;
      }
    } else {
      clearInterval(interval);
    }
  }, 1000);
});
