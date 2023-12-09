const baseURL = 'https://source.unsplash.com/all/300x300';
// this url gives an image. Use this and NO API calls
const content = document.querySelector('.content');
const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
  console.log("bosadivale")
  content.innerHTML = `<img src =" https://source.unsplash.com/all/300x300/"></img>`;
  
});
