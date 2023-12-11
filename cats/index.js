const url = 'https://api.thecatapi.com/v1/images/search';


const container = document.querySelector('.container')

const btn = document.querySelector('.btn');

btn.addEventListener(   'click',(e)=>{
    (async()=>{

      const response = await fetch(url);
      const cat = await response.json();
      console.log(cat)
      container.innerHTML = `<img src ="${cat[0].url}"></img>`

    })()
})