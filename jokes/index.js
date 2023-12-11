const url = 'https://api.chucknorris.io/jokes/random';
const joke = document.querySelector('#display-joke');
const btn = document.querySelector('#getJoke');

// handle this end point with XMLHttpRequest



btn.addEventListener('click', (e) => {
  e.preventDefault()
  let  movies ;
   (
    async()=>{
   
    const response = await fetch(url);
     movies =  await response.json();
     joke.textContent =movies.value;
    }
    )()
 
  
});
// handle this end point with promises

// handle the case of race condition
