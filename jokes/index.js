const url = 'https://api.chucknorris.io/jokes/random';
const joke = document.querySelector('#display-joke');
const btn = document.querySelector('#getJoke');

// handle this end point with XMLHttpRequest



btn.addEventListener('click', (e) => {
  e.preventDefault()
  let  movies ;
  let a ;
   (
    async()=>{
        a = 89
    const response = await fetch(url);
     movies =  await response.json();
     joke.textContent = movies.value;
     
    }
    )()
 
  console.log(movies)
  console.log(a)
});

// let xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.chucknorris.io/jokes/random',true)
// // handle this end point with promises
// xhr.onload=function(){
  
// }
// handle the case of race condition
