const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
let run;


start.addEventListener('click', (event) => {
  event.preventDefault();
  run = setInterval(() => {
    document.querySelector('body').style.backgroundColor = randomColor();
  }, 300);
});

stop.addEventListener('click', (event) => {
  clearInterval(run);
});

function randomColor() {
    const max = 256
    const min = 0
  let a = Math.floor((Math.random() *(max-min) )+min);
  let b = Math.floor((Math.random() *(max-min) )+min);
  let c = Math.floor((Math.random() *(max-min) )+min);

  return `rgb(${a},${b},${c})`;
}
