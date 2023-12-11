const body = document.querySelector('body');
const insert = document.querySelector('#insert');
body.addEventListener('keypress',(event)=>{

    event.preventDefault();
    
    insert.innerHTML = `<h1>${event.key}</h1>`

})