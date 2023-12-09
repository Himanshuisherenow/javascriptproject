const upper = document.querySelector('.uppercase');
const inputV = document.querySelector('#input-field');
const outputV = document.querySelector('#output-field');
const lower = document.querySelector('.lowercase');
const capital = document.querySelector('.capitalize');
const bold = document.querySelector('.bold');
const italic = document.querySelector('.italic');
const underline = document.querySelector('.underline');

const btn = document.querySelector('.btns-container');

btn.addEventListener('click', (e) => {
  let a = inputV.value;
 
  e.preventDefault();
  if (e.target.className.split(' ')[1] === 'capitalize') {
    outputV.textContent = a.charAt(0).toUpperCase() + a.slice(1);
  } else if (e.target.className.split(' ')[1] === 'uppercase') {
    outputV.textContent = a.toUpperCase();
  } else if (e.target.className.split(' ')[1] === 'lowercase') {
    outputV.textContent = a.toLowerCase();
  } else if (e.target.className.split(' ')[1] === 'bold') {
    outputV.innerHTML = `<b>${a}</b>`;
  } else if (e.target.className.split(' ')[1] === 'italic') {
    outputV.innerHTML = `<em>${a}</em>`;
  } else if (e.target.className.split(' ')[1] === 'underline') {
    outputV.innerText = a;
    outputV.style.textDecoration = 'underline';
    console.log(outputV.style.textDecoration)
  }
 

  console.log(e);
});
